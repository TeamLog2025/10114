const os = require('os');
console.log('운영체제 이름:', os.type());
console.log('플랫폼:', os.platform());
console. log('총 메모리:',os. totalmem(),'GB' );
console. Log('가용 메모리: ', os.freemem(),'GB' );

const cpuCount = os.cpus().length;
console.log('CPU 코어 개수:', cpuCount);
