const os = require("os");
console.log("--------------------------------------------------")
console.log("CPU ARCHITECTURE = ",os.arch())
console.log("free memory = ",os.freemem())
console.log("free memory in RAM = ",os.freemem()/(1024*1024*1024))
console.log("Total memory = ",os.totalmem())
console.log("network interafce = ",os.networkInterfaces())
console.log("Temporary Directory = ",os.tmpdir())
console.log("Endioness - ",os.endianness())
console.log("hostname - ",os.hostname())
console.log("OS tye - ",os.type())
console.log("platform - ",os.platform())
console.log("OS relelese data - ",os.release())
console.log("User info = ",os.userInfo())




console.log("--------------------------------------------------")