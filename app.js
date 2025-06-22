const express = require('express');
const path = require('path');
const app = express();

// Pug 설정
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 루트: index.pug
app.get('/', (req, res) => {
  res.render('index');
});

// 서버 실행
const PORT = 3000;  // 또는 5500
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
