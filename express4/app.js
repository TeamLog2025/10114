const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/books', (req, res) => {
  const books = [
    { title: "자바스크립트 완벽 가이드", author: "데이비드 플래너건", year: 2020 },
    { title: "클린 코드", author: "로버트 마틴", year: 2008 },
    { title: "HTTP 완벽 가이드", author: "데이빗 고울리", year: 2014 }
  ];
  res.render('books', { books });
});

const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
