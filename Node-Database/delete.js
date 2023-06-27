const dbConnect = require("./mongodb")

const deleteData = async()=>{
    const data = await dbConnect()

    // const result = await data.deleteOne({name:"LAVA"}) 
    const result = await data.deleteMany({name:"max7"})       

    console.log(result)
    if (result.deletedCount==0) {
        console.log("delete npthing")
    }
    else{
        console.log("deleted")
        console.log(result)
    }
}


deleteData()