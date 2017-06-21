const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const data = require("./data.js");
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache')




app.get('/', function (req, res){



  res.render('index', { users: data.users })
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
//hey
