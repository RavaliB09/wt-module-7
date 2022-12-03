var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kle"
});
con.connect(function (error) {
    if (error) throw error;
    console.log("connected!");
    var sql = "INSERT INTO student (roll ,per ,name )values (100,65,'suresh')";
    var sql = "INSERT INTO student (roll ,per ,name )values (101,64,'manju'),(102,80,'abc')";
    //var sql = "insert into student values(& roll, &per, &'name')";


    con.query(sql, function (error, result) {

        if (error) throw error;
        console.log("1 record inserted");
    });
});
