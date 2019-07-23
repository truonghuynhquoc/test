express = require('express');

var path = require('path');
app = express();
app.use(express.static(__dirname + 'views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
require('./webapi');
app.listen(4000, function(){
    console.log("stzrt nodejs");
    console.log('====================================');
})

var data = "122331212";
var crypto = require('crypto');
console.log(crypto.createHash('md5').update(data).digest("hex"));