
// Create a new file using the appendFile() method:
var fs = require('fs');

fs.appendFile('mynewfile2.txt', 'Hello content!', function(err){
    if (err) throw err;
    console.log('Created!');
});







