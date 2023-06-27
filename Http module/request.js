// http server to server-------------

const http = require("http");
const option = {
    hostname:"fakestoreapi.com",
    path:'/products/1',
    method:'GET'
}
const apiReq = http.request(option,(res)=>{
    res.on("data",(data)=>{
        console.log(data.toString());
    })
})

apiReq.end()

