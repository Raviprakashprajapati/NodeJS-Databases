const dbConnect = require("./mongodb")

const insertData =async ()=>{

    const db = await dbConnect()
    // const result = await  db.insertOne(
    //     {name:'note 5',brand:'vivo',price:320,category:'mobile'}
    // )

    const result = await  db.insertMany(
        [
            {name:'i phone 2',brand:'apple',price:320,category:'mobile'},
           
        ]
        )
    // console.log(result)
    if (result.acknowledged) {
        console.log("Data inserted")
        
    }
 
}

insertData()



