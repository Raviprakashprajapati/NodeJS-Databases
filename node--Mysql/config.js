const mysql = require("mysql")
const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    database:"college"
})

// con.connect((err)=>{
//     if(err){ console.log("error hai bhai")}
//     else { console.log("DONE") } 
// })

module.exports = con;