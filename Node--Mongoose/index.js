// const express = require("express")
// require("./config")
// const product = require("./product")

// const app = express()
// app.use(express.json())

// app.get("/", async (req, res) => {
//     res.send
// })


// app.get("/list", async (req, res) => {
//     let data = await product.find()
//     res.send(data)
// })


// app.post("/create", async (req, res) => {
//     let data = new product(req.body)
//     let result = await data.save()
//     res.send(result)
//     console.log(req.body)
// })

// app.delete("/delete/:_id", async (req, res) => {
//     let data = await product.deleteOne(
//         req.params
//     )
//     console.log(data)
//     res.send(data)
// })

// app.put("/update/:_id", async (req, res) => {
//     let data = await product.updateOne(
//         req.params,
//         { $set: req.body }
//     )
//     res.send(data)
// })

// app.listen(5000)










// -------------------------------------------------------------------------------------

// SEARCH API======================================
// const express = require("express")
// const app = express()
// require("./config")
// const product = require("./product")
// app.use(express.json());

// app.get("/search/:key",async(req,res)=>{
//     console.log(req.params.key)
//     let data = await product.find({
//         "$or":[
//             {name:{$regex:req.params.key}},
//             {brand:{$regex:req.params.key}}
//         ]
//     })
//     res.send(data)
// })

// app.listen(500)














// MULTER=========================================
// const express = require("express")
// const multer = require("multer")
// const app = express()


// // const upload = multer({
// //     storage: multer.diskStorage({
// //         destination: function (req, file, cb) {
// //             cb(null, '/uploads')
// //         },
// //         filename: function (req, file, cb) {
// //             cb(null, file.fieldname + "-" + Date.now() + ".js")
// //         }
// //     })
// // }).single('file_name');

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             return cb(null, '/uploads')
//         },
//         filename: function (req, file, cb) {
//             return cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file")

// app.post("/upload", upload, async (req, res) => {
//     res.send("Upload DOne")
// })

// app.listen(600)
























// EVENT AND EMITTER======================================

// const express = require("express")
// const app = express()
// const EventEmitter = require("events")
// const event   = new EventEmitter()

// let count = 0


// event.on("countAPI",()=>{
//     count++
//     console.log("HELLo on events called",count)
// })

// app.get("/",(req,res)=>{
//     res.send("APi called")
//     event.emit("countAPI")
    
// })
// app.get("/search",(req,res)=>{
//     res.send("APi search called")
//     event.emit("countAPI")
// })
// app.get("/update",(req,res)=>{
//     res.send("update called")
//     event.emit("countAPI")
// })



// app.listen(400)















// MYSQL =======================================================================

