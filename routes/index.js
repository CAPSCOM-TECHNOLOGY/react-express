var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/userslist",function(req,res,next){
  let users=[
    {"name":"aman","age":20,"address":"almora"},
    {"name":"rakesh","age":20,"address":"almora"},
    {"name":"ajay","age":20,"address":"almora"},
    {"name":"ankit","age":20,"address":"almora"},
    {"name":"ramesh","age":20,"address":"almora"},
  ]
  res.json(users)
})

module.exports = router;
