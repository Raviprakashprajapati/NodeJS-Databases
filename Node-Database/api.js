const express = require("express")
const dbConnect = require("./mongodb")
const app = express()

app.use(express.json())

app.get("/", async (req, res) => {

    let data  = await dbConnect()
    data = await data.find().toArray();
    // console.log(data)
    res.send(data)

})

app.post("/", async (req,res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})


app.put("/:name", async(req,res)=>{
    console.log("PUT = ",req.body)
    let data = await dbConnect()
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send(req.body)
})


app.delete('/:name',async(req,res)=>{
    console.log("delete = ",req.params.name)
    const data = await dbConnect()
    const result = await data.deleteOne({name:req.params.name})
    res.send(result)
})

app.listen(500)