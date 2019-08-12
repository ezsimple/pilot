const express = require('express');
const router = express.Router(); // express 모듈로 부터 route 분리
const path = require('path');
const app = express();

app.use(express.static('public'));

// route 파일로 각각 분리
const ictSvc = require('./routes/ict');
app.use('/req/ict', ictSvc.doIt);

// start cmd : $ yarn run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('Service Port : ', PORT);
});
