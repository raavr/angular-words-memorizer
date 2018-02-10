const fs = require('fs');
const mysql = require('mysql');
const readline = require('readline');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.MYSQL_DATABASE_USER,
    password : process.env.MYSQL_DATABASE_PASSWORD,
    database : 'memorize'
});
connection.connect();

const WORDS_FILE = 'words.txt';

async function prepareFile() {
    const lineReader = readline.createInterface({
        input: fs.createReadStream(WORDS_FILE)
    });
      
    return await new Promise((resolve, reject) => {
        const words = [];
        lineReader.on('line', line => {
            const wordArray = line.split(":");
            words.push(wordArray);
        }).on('close', () => {
            resolve(words);
        });
    });
}

function addToDb(words) {
    const sqlQuery = "insert into words (en, trns) VALUES ?";
    connection.query(sqlQuery, [words], function(err) {
        if (err) throw err;
        connection.end();
    });
}

function main() {
    prepareFile().then((words) => { 
        addToDb(words);
        process.exit(0);
    });
} 

main();

