
// const mysql = require("mysql")

// const sqlConnect = mysql.createConnection({
//     host:'127.0.0.1',
//     user:"root",
//     password:"root123",
//     database:"movies_pw"
// })

// sqlConnect.connect((err)=>{
//     if (err) {
//      console.log("error hai bhai",err)   
//     }
//     else{
//         console.log("sab thik hai")
//     }
// })

// sqlConnect.query("select * from actors",(err,result)=>{
//     console.log("result - ",result)
// })

// -----------------------------------------









// MYSQL GET POST PUT DELETE-============================================================================================

const express = require("express")
const app = express()
const con = require("./config")

// convert req.obdy into json formate
app.use(express.json())

app.get("/", (req, res) => {
    con.query("select * from student", (err, result) => {
        if (err) { res.send("error in get") }

        else { res.send(result) }
    })
})

app.post("/", (req, res) => {
    // const data = {name:"node",registration_no:420,gender:"male",department:"JS",no_of_compartment:2}
    const data = req.body
    con.query("insert into student SET?", data, (error, result, field) => {
        if (error) {
            throw error
        }
        else { res.send(result) }
    })

})


app.put("/:s_no", (req, res) => {

    // dyanmic put
    const data = [req.body.name,req.body.gender,req.params.s_no ]
    con.query("UPDATE student SET name=?,gender=? WHERE s_no=? ", data, (error, result, field) => {
        if (error) {
            res.send(error)
        } else { res.send(result) }
    })




    // static put
    // const data = ["anaconda", "FEMALE", 4];
    // con.query("UPDATE student SET name=?,gender=? WHERE s_no=? ", data, (error, result, field) => {
    //     if (error) {
    //         res.send(error)
    //     } else { res.send(result) }
    // })

    

})

app.delete("/:s_no",(req,res)=>{
    con.query("DELETE FROM student WHERE  s_no ="+req.params.s_no,(error,result)=>{
        if (error) {
            res.send(error)
        }else{ res.send(result) }
    })
    // res.send(req.params.s_no)
})


app.listen(5000)

