const fs = require('fs');

//Example: A result from some function o request
const res = 'important data';

/*
 *In hackerank the results STDOUT need saved in a file
 *where readuls are compared the filename are in
 *OUTPUT_PATH
*/

fs.createWriteStream(process.env.OUTPUT_PATH).write(res);
