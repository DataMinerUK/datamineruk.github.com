var spreadsheetURL = {
  "sheet1": "https://spreadsheets.google.com/feeds/list/1O82vKugVL7nW60U3NLLtJMG_4nhU8E3UpCgTfzRrD6E/od6/public/values?alt=json"
};
var spreadsheetData = {
  'sheet1':[]
};
//ajax request from google sheet
var dataFetch = function(url) {
    $.ajax({
    url: url,
    type: "get",
    dataType: "json",
      success: function(data) {
        for(var i in data.feed.entry) {
        var spreadsheetRow = [];
        // make an object of the rows 
        // Keys are column names, lower case with spaces stripped out and special characters removed
        // converts strings to floats if they are 0-9 with commas or periods
        for(var k in data.feed.entry[i]) {
          if(k.substr(0, 4) == 'gsx$'){
            spreadsheetRow.push(parseFloat(data.feed.entry[i][k].$t));
          }
        }
        spreadsheetData.sheet1.push(spreadsheetRow);

      }
      console.log(spreadsheetData.sheet1);
      runD3(spreadsheetData.sheet1);
      }
    });
}

//get cells in first sheet, arrange in rows
dataFetch(spreadsheetURL.sheet1);
// console.log(re);

var width = 650,
    height = 650,
    outerRadius = Math.min(width, height) / 2 - 10,
    innerRadius = outerRadius - 24;

var formatPercent = d3.format(".1%");

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var layout = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending)
    .sortChords(d3.ascending);

var path = d3.svg.chord()
    .radius(innerRadius);

var svg = d3.select("#chord").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("id", "circle")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("circle")
    .attr("r", outerRadius);

function runD3(matrix) {

  d3.csv("parties.csv", function(parties) {
  // d3.json("matrix.json", function(matrix) {

    // Compute the chord layout.
    layout.matrix(matrix);

    // Add a group per neighborhood.
    var group = svg.selectAll(".group")
        .data(layout.groups)
      .enter().append("g")
        .attr("class", "group")
        .on("mouseover", mouseover);

    // // Add a mouseover title.
    // group.append("title").text(function(d, i) {
    //   return parties[i].name + ": " + d.value + "%";
    // });

    // Add the group arc.
    var groupPath = group.append("path")
        .attr("id", function(d, i) { return "group" + i; })
        .attr("d", arc)
        .style("fill", function(d, i) { return parties[i].color; });

    // Add a text label.
    var groupText = group.append("text")
        .attr("x", 6)
        .attr("dy", 15);

    groupText.append("textPath")
        .attr("xlink:href", function(d, i) { return "#group" + i; })
        .text(function(d, i) { return parties[i].name; });

    // Remove the labels that don"t fit. :(
    groupText.filter(function(d, i) { return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength(); })
        .remove();

    // Add the chords.
    var chord = svg.selectAll(".chord")
        .data(layout.chords)
      .enter().append("path")
        .attr("class", "chord")
        .style("fill", function(d) { return parties[d.source.index].color; })
        .attr("d", path);

    function mouseover(d, i) {
      chord.classed("fade", function(p) {
        return p.source.index != i
            && p.target.index != i;
      });

      // console.log(parties);
      // console.log(matrix);
      // console.log(d);
      // console.log(i);

      var description = "";

        var party = parties[i];
        var intentions = matrix[i];
        for(var j = 0; j < intentions.length; j++){
            var inflow = matrix[i][j];
            var outflow = matrix[j][i];
            var comparisonParty = parties[j];

            description += "Intending to vote "
              + party.name
              + " having voted " + comparisonParty.name
              + " in the last election: " + inflow + "%"
              + "\n" + "Intending to vote "
              + comparisonParty.name
              + " having voted " + party.name
              + " in the last election: " + outflow + "%"
              + "<br><br>";
        }

        
        document.getElementById("description").innerHTML=description;
    }
  // });
});
}
