
const fs = require('fs');
fs.writeFile('input.txt', 'Hello, Node.js!', (err) => {
if (err) throw err;
console. log('파일이 생성되었습니다. ');
fs.readFile('input.txt', 'utf8', (err, data) => { if (err) throw err;
console. log('파일 내용:', data);
});
});
fs.readdir('.', (err, files) => {
if (err) throw err;
files. forEach(file => { console. log(file);
});
});
