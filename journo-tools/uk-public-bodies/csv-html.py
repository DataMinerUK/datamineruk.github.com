
#!/usr/bin/python
# create html table from csv


import sys
import csv

if len(sys.argv) < 3:
	print "Usage: csvToTable.py csv_file html_file"
	exit(1)

# Open the CSV file for reading
reader = csv.reader(open(sys.argv[1]))

# Create the HTML file for output
htmlfile = open(sys.argv[2],"w")

# initialize rownum variable
rownum = 0

# write <table> tag
htmlfile.write('<table id="foi">')

for row in reader: # Read a single row from the CSV file
	if rownum == 0:
		htmlfile.write('<thead>')
		htmlfile.write('<tr>') # write <tr> tag
  		for column in row:
  			htmlfile.write('<th>' + column + '</th>') # write header columns
  		htmlfile.write('</tr>') # write </tr> tag
		htmlfile.write('</thead>')
		
		# write </tfoot> tag
		htmlfile.write('<tfoot>')
		htmlfile.write('<tr>')
		for column in row:
  			htmlfile.write('<th>' + column + '</th>')
		htmlfile.write('</tr>')
		htmlfile.write('</tfoot>')
		
		htmlfile.write('<tbody>')
		
  	else: # write all other rows
  		colnum = 1
  		if rownum % 2 == 0:
  			htmlfile.write('<tr class="color1">')
  		else:
  			htmlfile.write('<tr class="color2">')

  		for column in row:
  			if colnum == 1:
				htmlfile.write('<td class="column_' + str(colnum) + '">' + column + '</td>\n')
			if colnum == 2:
				if column == "":
					htmlfile.write('<td class="column_' + str(colnum) + '">' + column + '</td>\n')
				else:
					htmlfile.write('<td class="column_' + str(colnum) + '"><div class="info">Info<span>' + column + '</span></div></td>\n')
			if colnum == 3:
				if column == "":
					htmlfile.write('<td class="column_' + str(colnum) + '">' + column + '</td>\n')
				else:
					htmlfile.write('<td class="column_' + str(colnum) + '"><a target="_blank" href="' + column + '">URL</a></td>\n')
			if colnum == 4:
				if column == "":
					htmlfile.write('<td class="column_' + str(colnum) + '">' + column + '</td>\n')
				else:
					htmlfile.write('<td class="column_' + str(colnum) + '"><a target="_blank" href="' + column + '">FOI</a></td>\n')
			if colnum == 5:
				htmlfile.write('<td class="column_' + str(colnum) + '">' + column.lower().replace(",", "").replace(".", "").replace("companies", "company").replace("schoool", "school").replace("academies", "academy").replace("crematorium", "crematoria").replace("eir", "eir_only").replace("primary_school", "primary").replace("prob_board", "probation").replace("pta", "ita").replace("pubic_assets", "public_assets").replace("public_corperation", "public_corporation").replace("public_funding", "public_funded").replace("railway", "rail").replace("railways", "rail").replace("secondary_school", "secondary").replace("specialhb", "specialhealtha").replace("uk_ln", "london").replace("ukparliament", "parliament").replace("wma", "wda") + '</td>\n')
  			colnum += 1
  		htmlfile.write('</tr>\n')

	rownum += 1
	
htmlfile.write('</tbody>')

# write </table> tag
htmlfile.write('</table>')
exit(0)
