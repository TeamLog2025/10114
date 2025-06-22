const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {    
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다`);
});
