const path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const request = require('request');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_DATABASE_USER,
  password: process.env.MYSQL_DATABASE_PASSWORD,
  database: 'memorize'
});
connection.connect();

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const queryGetWords = 'select w.id, w.en, w.trns from words w where w.ignore = 0 limit ?, ?';
const getWords = (offset, limit) => {
  return new Promise((resolve, reject) => {
    connection.query(queryGetWords, [offset, limit], function (err, rows, fields) {
      if (err) throw err;
      resolve(rows);
    });
  })
}

app.get('/api/words', async (req, res) => {
  const offset = +req.query.limit * +req.query.page,
    limit = +req.query.limit;

  const words = await getWords(offset, limit);
  res.send({ words: words });
});

const queryIgnoreUpdateWord = 'update words w set w.ignore = 1 where w.id = ?'
app.put('/api/word/', (req, res) => {
  connection.query(queryIgnoreUpdateWord, [req.body.wordId], (err, rows, fields) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
