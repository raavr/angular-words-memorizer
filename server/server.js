const path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const request = require('request');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : process.env.MYSQL_DATABASE_USER,
  password : process.env.MYSQL_DATABASE_PASSWORD,
  database : 'memorize'
});
connection.connect();

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const queryGetWords = 'select w.id, w.en, w.trns from words w where w.ignore = 0';
app.get('/api/words', function(req, res) {
    connection.query(queryGetWords, function (err, rows, fields) {
        if (err) throw err;
        res.send({words: rows});
    });
});

const queryIgnoreUpdateWord = 'update words w set w.ignore = 1 where w.id = ?'
app.put('/api/word/', function(req, res) {
    connection.query(queryIgnoreUpdateWord, [req.body.wordId], function (err, rows, fields) {
        if (err) throw err;
        res.sendStatus(200);
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
  