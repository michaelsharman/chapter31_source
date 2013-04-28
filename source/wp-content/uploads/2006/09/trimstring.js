/*
	
	File:		string_trimming.htm
	Author:		Ben Nadel
	Desc:		This demonstrates the use of string trimming using regular 
				expressions to strip out extra white space characters.
				
	Sample Code:
		
				N/A
				
	Legal:
			
				Copyright Ben Nadel @ KinkySolutions.com 2006. Please give 
				credit where credit is due.
				
	Update History:
	
				05/03/2006 - Ben Nadel
				Built the first run of the page.
	
*/

// Trims the beginning and trailing white space from a string.
function trim( strText ){
	return( strText.replace(new RegExp("^([\\s]+)|([\\s]+)$", "gm"), "") );
}
	
// Trims the beinning white space from a string.
function leftTrim( strText ){
	return( strText.replace(new RegExp("^[\\s]+", "gm"), "") );
}
		
// Trims the trailing white space from a string.
function rightTrim( strText ){
	return( strText.replace(new RegExp("[\\s]+$", "gm"), "") );
}