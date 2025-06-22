const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));



app.get('/weather', (req, res) => {
  const weather = {
    temp: 28,    
    status: '맑음'
  };
  res.render('weather', { weather });
});


const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});
