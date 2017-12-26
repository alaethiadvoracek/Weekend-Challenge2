const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const operatorChooser = require('./calculate.js');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculation', function (req, res){
    console.log(req.body);
    operaterChooser.math(req.body);
    res.sendStatus(201);
})//end app post 

app.get('/calculation', function (req, res){
    res.send(operatorChooser.calculate);
})//end app get 

const port = 4500;
app.listen(port, function(req, res){
    console.log('server is up on port:', port);
})//end listener for server port