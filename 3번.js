const crypto = require('crypto');


const password = '123';


const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log('원본 비밀번호:', password);
console.log('SHA-256 해시:', hash);

