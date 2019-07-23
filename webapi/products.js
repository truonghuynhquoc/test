//goi database
const connection = require('../config/connect_db');
const crypto = require('crypto');
var md5 = require('md5');
router = express.Router();


router.get('/',function(req,res){
    connection.query('select * from accounts', function(err, results, fields){
        if(err)
        console.log(err);
        // console.log(results);
        res.render('products/products',{results});
    })
})
router.get('/detail/:id', function detailProducts(req,res){
    var id = req.params.id;
    var queryId = `select id, username, email,fullname FROM accounts WHERE id = "${id}"`;
    connection.query(queryId, function(err, kq, fields){
        if(err)
        console.log(err);
        res.render('products/detail', {kq});
        console.log(kq);
        
    })
})
router.get('/detail/delete/:id', function deleteProduct(req, res){
    var id = req.params.id;
    var queryId = `DELETE from accounts where id = "${id}"`;
    connection.query(queryId, function(err, result, fields){
        if(err)
        console.log(err);
        else
        console.log("xoa thanh cong !");
        res.redirect('/');
        
    })
})
module.exports = router