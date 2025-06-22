const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.render('profile', {name: '이승진', age: 17, job: '개발자'});
});


const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
