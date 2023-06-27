// console.log("code step by step");
// const data = require("./Data")
// const http = require("http")
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':"application/json"})
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(500)

// console.log(process.argv)


// const path = require("path")
// const fs = require("fs")
// console.log(__dirname)
// const dirPath = path.join(__dirname, 'files')
// console.log(dirPath)
// // for (let i=0;i<5;i++)
// // {
// //     fs.writeFileSync(dirPath+`/hello${i}.txt`,"hello bhai kya hall hai")

// // }


// fs.readdir(dirPath, (err, res) => {
//     // console.log(res)
//     res.forEach((i) => {
//         console.log(i)
//     })
// })



// Crud------

// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname,'crud')
// const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,"this is my apple txt file")

// fs.readFile(filePath,'utf-8',(err,res)=>{
//     console.log(res)
// })

// fs.appendFile(filePath," and maine append kiya hai",(err)=>{
//     if (err) {
//         console.log("Erre hai bhai")
//     }
//     console.log("append ho gaya")
// })

// fs.rename(filePath,`${dirPath}/rename.txt`,(err)=>{
//     if (err) { console.log("error hai rename mai")
//     }
//     console.log("rename ho gaya")
// })

// fs.unlink(`${dirPath}/rename.txt`,(err)=>{
//     if (err) { console.log("error hai bhai") }
//     console.log("deleet ho gaya")
// })





// expres----

// const expres = require("express")
// const app = expres()

// app.get('',(req,res)=>{
//     // console.log(req)
//     res.send(`hello this is home page <br/>
//                 ${req.query.name} <br/>
//                 <a href="/about" >About us<a/>
//                 <a href="/contact" >contact us<a/>
//                 <p>paragraph</p>
//                 `)
// })
// app.get("/about",(req,res)=>{
//     res.send(`this is about us page <br/>
//     <a href="/" >home<a/><br/>
//     <input type="text" value=${req.query.name} />
//     `)
// })

// app.get("/contact",(req,res)=>{
//     res.send(

//                 [
//                     {name:"ravi",age:"19"},
//                     {name:"saurav",age:"19"}
//                 ]

//     )
// })
// app.listen(500);




// render all html page-----

// const expres = require("express")
// const app = expres()
// const path = require("path")
// const public = path.join(__dirname,"public");
// app.use(expres.static(public))
// app.listen(500)


// // remove file extensioin from URL--------------
// const expres = require("express")
// const app = expres()
// const path = require("path")
// const public=  path.join(__dirname,"public")
// app.get("",(req,res)=>{
//     res.sendFile(`${public}/index.html`)
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(`${public}/about.html`)
// })
// app.get("*",(req,res)=>{
//     res.sendFile(`${public}/nopage.html`)
// })
// app.listen(500)



// template ending--------------

// const expres = require("express")
// const app = expres()
// const path = require("path")
// const public = path.join(__dirname, "public")
// app.set("view engine", 'ejs')

// app.get("", (req, res) => {
//     res.sendFile(`${public}/index.html`)
// })
// app.get("/profile", (req, res) => {
//     const user = {
//         name: "ravi",
//         age: "19",
//         skills: ["html", "css", "javascript"]
//     }

//     res.render('profile', { user });
// })
  
// app.get("/login", (req, res) => {
//     res.render('login')
// })
// app.get("/about", (req, res) => {
//     res.sendFile(`${public}/about.html`)
// })
// app.get("*", (req, res) => {
//     res.sendFile(`${public}/nopage.html`)
// })
// app.listen(500)



// middleware--------------
// Application route--
// const expres  = require('express')
// const app = expres();

// const reqFilter =  (req,res,next)=>{
//     // console.log("reqFilter")
//     if (!req.query.age) {
//         res.send("Please provide age")
        
//     }
//     else if(req.query.age <18){
//         res.send("You cannot acces this page")
//     }
//     else
//     {

//         next()
//     }
// }

// app.use(reqFilter)

// app.get("/",(req,res)=>{
//     res.send('welcome to home pgae')
// })

// app.get("/about",(req,res)=>{
//     res.send('welcome to about pgae')
// })

// app.get("/user",(req,res)=>{
//     res.send('welcome to user pgae')
// })

// app.listen(500)


// routes level-
// const expres  = require('express')
// const app = expres();
// const reqFilter = require("./middleware")

// // app.use(reqFilter)

// app.get("/",(req,res)=>{
//     res.send('welcome to home pgae')
// })

// app.get("/about",(req,res)=>{
//     res.send('welcome to about pgae')
// })

// app.get("/user",reqFilter,(req,res)=>{
//     res.send('welcome to user pgae')
// })

// app.listen(500)

// use route--
// const expres  = require('express')
// const app = expres();
// const reqFilter = require("./middleware")
// const route = expres.Router()
// route.use(reqFilter)
// // app.use(reqFilter)

// app.get("/",(req,res)=>{
//     res.send('welcome to home pgae')
// })

// app.get("/about",(req,res)=>{
//     res.send('welcome to about pgae')
// })

// route.get("/user",(req,res)=>{
//     res.send('welcome to user pgae')
// })
// app.use('/',route)
// app.listen(500)