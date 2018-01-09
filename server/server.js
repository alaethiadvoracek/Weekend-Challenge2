const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const operator = require('./calculate.js');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculation', function (req, res){
    console.log(req.body);
    operator.math(req.body);
    res.sendStatus(201);
})//end app post 

app.get('/calculation', function (req, res){
    res.send(operator);
})//end app get 

//server port and listener
const port = 4500;
app.listen(port, function(req, res){
    console.log('server is up on port:', port);
})//end listener for server port