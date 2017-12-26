const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));







const port = 4500;
app.listen(port, function(req, res){
    console.log('server is up on port:', port);
})//end listener for server port