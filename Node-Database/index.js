// const {MongoClient} = require("mongodb")
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url);
// const database = "e-commernce"

//  async function getData(){
//     let  result = await client.connect();
//     let db =  result.db(database);
//     let collection = db.collection('product')
//     let response = await collection.find({}).toArray()
//     console.log(response)
// }

// getData();




// dbConnect().then((resp)=>{
//   resp.find({brand:"sumsung"}).toArray().then((data)=>{
//     console.log(data)
//   })
// })




const dbConnect = require("./mongodb")


const main = async ()=>{
  
  let data  = await dbConnect()
  data = await data.find().toArray()
  console.log(data)

}

main()




















// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'e-commernce';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('product');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then((value)=>{
//     console.log(value)
//   })
//   .catch(console.error)
//   .finally(() => client.close());