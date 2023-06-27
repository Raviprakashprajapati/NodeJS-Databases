const dbConnect = require("./mongodb")

const updateData = async()=>{
    let data = await dbConnect()
    // let result = await data.updateOne(
    //     {name:"i phone 2"},
    //     { $set:{name:"I Phone 22"} }
    // )

    let result = await data.updateMany(
        {name:"I Phone 22"},
        { $set:{name:"LAVA"} }
    )


    console.log(result)
    
}


updateData()