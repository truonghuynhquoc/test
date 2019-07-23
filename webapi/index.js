const router = express.Router()
// require('bootstrap');
// require("bootstrap-loader");

//account

app.get('/', function(req, res){
    res.render('index');
})
const product = require('./products');
app.use('/product', product)
module.exports = router