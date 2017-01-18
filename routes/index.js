var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');

var chartlist = require('../model/user').chart;

// mongoose.connect('mongodb://localhost/chartuser');
var MongoClient = require('mongodb').MongoClient;
var dbstr = 'mongodb://localhost/chartuser';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Chart Test'});
});

router.post('/welcome', function (req, res) {

    // var query_doc = {password: req.body.pass};
    var selectData = function (db, callback) {
        //连接到表
        var collection = db.collection('chartuser');
        //查询数据
        var whereStr = {"username": req.body.pass};
        collection.find(whereStr).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    MongoClient.connect(dbstr, function (err, db) {
        console.log("连接成功！");
        selectData(db, function (result) {
            console.log(result);
            db.close();
            res.render('welcome', {title: 'homepage'});
        });
    });

    // chartlist.count(query_doc, function (err, doc) {
    //
    //     if (doc == 1) {
    //
    //         // console.log(query_doc.username + ": login success in " + new Date());
    //         res.render('welcome', {title: 'homepage'});
    //
    //     } else {
    //         console.log(doc + '|||||' + query_doc.password + new Date());
    //         res.redirect('/');
    //
    //     }
    //
    // });
});

module.exports = router;
