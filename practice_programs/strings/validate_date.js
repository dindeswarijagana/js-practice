const format = 'yyyy-mm-dd';
const date = '1900-10-11';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let year = "";
let day = "";
let month = "";
let isDateInFormat = false;
const isFormatValid = format === 'yyyy-mm-dd' || format === 'mm-dd-yyyy' || format === 'dd-mm-yyyy';
const isDateFormatyyyymmdd = date[4] + date[7] === '--';
const isDateFormatddmmyyyy = date[2] + date[5] === '--';
const isDateFormatmmddyyyy = date[2] + date[5] === '--'; 

if (format === 'yyyy-mm-dd' && isDateFormatyyyymmdd) {
    year = +(date[0] + date[1] + date[2] + date[3]);
    month = +(date[5] + date[6]);
    day = +(date[8] + date[9]);
}

if (format === 'dd-mm-yyyy' && isDateFormatddmmyyyy) {
   day = +(date[0] + date[1]);
   month = +(date[3] + date[4]);
   year = +(date[6] + date[7] + date[8] + date[9]);
}

if (format === 'mm-dd-yyyy' && isDateFormatmmddyyyy) {
    month = +(date[0] + date[1]);
    day = +(date[3] + date[4]);
    year = +(date[6] + date[7] + date[8] + date[9]); 
}

const isValidYear = year > 1 && year < 10000;
const isValidMonth = month > 0 && month < 13;

if (isValidYear && isValidMonth) {
    const isLeapYear = year % 400 === 0 && year % 100 === 0 || year % 4 === 0;
    const monthHas28Days = is
}