var express = require('express');
var router = express.Router();

const mysql = require("mysql");
const { connect } = require('.');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'todolist',
    password: 'todolist',
    database: 'todo'
});

// open the MySQL connection
connection.connect();
var tmp = [];
connection.query('select * from list', (err, res) => {
    tmp=res;
});
router.get('/', function (req, res) {
    connection.query('select * from list', (err, res) => {
        tmp=res;
    });
    res.json(tmp);
});

router.post('/', function (req, res) {
    tmp = req.body;
    connection.query('delete from list');
    for(let i=0;i<tmp.length;i++){
        connection.query('insert into list set ?',tmp[i]);
    }
})

module.exports = router;