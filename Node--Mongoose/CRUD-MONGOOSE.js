// // // A schema is a JSON object that defines the structure and field of content of data so that apply validation
// // // model is connect nodejs with mongdb

// // CRUB  OPERATION WITH MONGOOSE------------------
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/e-commernce")

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
// });

// const saveInDB = async () => {
//     const product = mongoose.model('products', productSchema)

//     let data = new product({
//         name: "iphone 15",
//         price: 500,
//         brand: "apple",
//         category: "Mobile"
//     });

//     let result = await data.save()
//     console.log(result)
// }

// // saveInDB()

// const updateData = async () => {
//     const product = mongoose.model('products', productSchema)
//     const data = await product.updateOne(
//         { name: "nothing 2" },
//         { $set: { price: 111, name: "nothing phone 1" } }
//     )
//     console.log(data)
// }

// // updateData()

// const deleteData = async () => {
//     const product = mongoose.model("products", productSchema)
//     let data = await product.deleteOne(
//         { name: "iphone 12" }
//     )
//     console.log(data)
// }
// // deleteData()

// const findData = async () => {
//     const product = mongoose.model("products", productSchema)
//     let data = await product.find(
//         { name: "nothing phone 1" }
//     )
//     console.log(data)
// }

// findData()


// // CRUB  OPERATION WITH MONGOOSE END------------------