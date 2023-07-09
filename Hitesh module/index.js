
const app = require("./app.js")
// database connect 
const mongoose = require("mongoose")

    (async () => {
        try {
            // db connect
            await mongoose.connect("")
            console.log("DB CONNECTED ")

            app.on("error",(err)=>{
                console.log("ERROR:",err)
            })

            app.listen(500,()=>{
                console.log("nodemon running....")
            })


        } catch (error) {
            console.log("ERROR : ", error)
        }
    })()

app.get("/", (req, res) => {
    res.send("helo bhai")
})

app.post("/", (req, res) => {
    res.send("post route hai")

})




// app.listen(500, () => {
//     console.log("nodemon running.....")
// })
