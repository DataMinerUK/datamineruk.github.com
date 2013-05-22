
curl "https://www.whatdotheyknow.com/body/all-authorities.csv" > all-authorities.csv
cat all-authorities.csv | python add-string-before.py "https://www.whatdotheyknow.com/body/" 2 > all-authorities-url.csv
csvcut -e 'iso-8859-1' -c 1,8,5,3,4 all-authorities-url.csv > search-tool-data.csv
python csv-html.py search-tool-data.csv search-tool-table.html
cat index-no-table.html search-tool-table.html footer.html > index.html
