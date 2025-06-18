const path = require('path');
const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        console.log(file);
    })
})
