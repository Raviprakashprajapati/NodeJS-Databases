// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url == "/") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text")
//         res.end("<h1>hello kya haal hai</h1>");
//     }
//     else if (req.url == "/about") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text")
//         res.end("<h1>ABOUT U page hai samaj nhi aata hai kya</h1>");
//     }
//     else if (req.url == "/product") {

//         const option = {
//             hostname: "fakestoreapi.com",
//             path: '/products/1',
//             method: 'GET'
//         }
//         const apiReq = http.request(option, (apiRes) => {
//             apiRes.on("data", (data) => {

//                 res.statusCode = 200;
//                 res.setHeader("Content-Type", "application/json")
//                 res.end(data.toString());
//             })
//         })

//         apiReq.on("error",(e)=>{
//             console.log(e)
//         })

//         apiReq.end()



//     }
//     else {
//         res.statusCode = 404;
//         res.setHeader("Content-Type", "text")
//         res.end("<h1>Aisa page hi nhi hai bhia </h1>");
//     }

// })

// server.listen(5000);













const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = "e-commerce";

async function getData() {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('product');
    const response = await collection.find({}).toArray();
    console.log("response = ",response);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    client.close();
  }
}

getData();



// {
//     "_id": {
//       "$oid": "6491f7886a9388876306859c"
//     },
//     "name": "sumsung m33",
//     "brand": "sumsung",
//     "price": 888,
//     "category": "mobile"
//   }