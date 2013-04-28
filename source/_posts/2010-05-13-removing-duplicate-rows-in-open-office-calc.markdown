---
comments: true
date: 2010-05-13 05:05:04
layout: post
slug: removing-duplicate-rows-in-open-office-calc
title: Removing duplicate rows in Open Office (calc)
wordpress_id: 821
categories:
- ColdFusion
---

I needed to de-dupe a spreadsheet the other day and [found a great how-to](http://blogs.sun.com/oootnt/entry/removing_duplicate_rows_in_calc) from google. Thought I'd post it here for my own future purposes:



* * *



There is no automatic function to remove duplicate rows. Follow these steps to delete all rows that have duplicate values in column A:




	
  1. Select all cells of the current data range.  

      On most systems, you can click any cell inside the data range, then press Ctrl+Multiplication key on the numeric keypad.

	
  2. Sort the data range by column A.  

      Choose Data - Sort.

	
  3. Click an empty cell in the first row. Let's assume it is cell C1. Enter the formula:
  
  

      =IF(A1=A2;1;0)
  
  

      This will display 1 if the current row has the same value in column A as the next row. It will display 0 if the values are different.

	
  4. Copy the formula down for all rows of the data range.  

      Drag the lower right edge of the cell C1 down to the last row.

	
  5. Now the formulas must be replaced by their values to freeze the contents.  

      While the column C is still highlighted, press Ctrl+C to copy all selected cells to the clipboard.

	
  6. Press Shift+Ctrl+V to open the Paste Special dialog box.  

      In the Selection area, enable only the Numbers command; disable the other Selection commands. Click OK.

	
  7. Select the whole data range including the new column C and sort the range by column C.  

      Choose Data - Sort.

	
  8. Select all rows which have a value 1 in column C, then press Del key.

	
  9. Optional steps: Delete column C. Select the remaining rows and sort them again by column A.


