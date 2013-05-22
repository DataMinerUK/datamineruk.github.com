#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import csv

add = sys.argv[1]
col = int(sys.argv[2])

sys.stdin = os.fdopen( sys.stdin.fileno(), "rU" )

# Open stdin as a csv
table = csv.reader( sys.stdin )

# Write to stdout as a csv
out = csv.writer(sys.stdout)

for row in table:
	field = row[col]
	fixedField = add + field# perform parsing step here
	row[col] = fixedField
	out.writerow(row)
