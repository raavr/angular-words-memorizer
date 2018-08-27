# Memorize words app

A simple Angular app that helps me memorise english vocabulary.

## Demo
![Demo 1][1]

## Usage

### Server
------

1. Open a terminal window and clone this repo:

  ```
  git clone https://github.com/raavr/angular-words-memorizer
  cd angular-words-memorizer
  ```

2. (Optional) Install mysql database (if you don't have it yet). On a Linux system, you can use:

  ```
  sudo apt-get install mysql-server
  ```

3. Log in to mysql and initialize a database:

  ```
  mysql -u [username] -p [password]
  mysql> source ./server/create_db_and_table.sql
  ```  

4. Install all dependencies:

  ```
  npm install
  ```

5. Populate the database with sample words (from words.txt file) using node script:
 
  ```
  cd ./server
  node add_words_to_db.js
  ```

6. Run the express server:

  ```
  node server.js
  ```

After these steps, your node server should be running on port 3001.

### Client
------
Open another terminal window:
1. Go to the cloned directory and run npm command (it builds your app and starts a development server):

  ```
  npm run server:dev
  ```

2. Then go to http://localhost:3000 in your browser.


-----
This app is built with:

### Client
* [Angular v5] (https://www.angular.io/)
* [Sass] (http://sass-lang.com/)
* [Babel] (https://babeljs.io/)
* [Webpack] (https://webpack.github.io/)

Environment configuration by [@AngularClass](https://github.com/AngularClass/angular2-webpack-starter)

### Server
* [Node] (https://nodejs.org/)
* [Express] (https://expressjs.com/)
* [Mysql] (https://www.mysql.com/)

[1]: ./demo/demo.gif