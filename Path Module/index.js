
// Node.js provides you with the path module that allows you to interact with file
// paths easily.
// ● The path module has many useful properties and methods to access and
// manipulate paths in the file system.


// DIR---------------------  BASENAME--------
// Root-                     Name-    Ext-   
// D:\   nodejs\pathmodule   \index   .js


console.log("------------------------------------------")
const path = require('path')
// console.log(path.sep)  
// //  ---/
// console.log(path.delimiter)
// //  ---;

const currentFile = __filename
// console.log(currentFile)
// console.log(__dirname)

let baseName = path.basename(currentFile)
console.log(baseName)

let baseNameWithExt = path.basename(currentFile,".js");
console.log(baseNameWithExt)

let dirName = path.dirname(currentFile)
console.log(dirName)

// console.log("ext  - ",path.extname(currentFile))
// console.log(" second ext if index.md.js  - ",path.extname("index.md.js"))

// let pathToFile = path.format({
//     dir:'/public/html',
//     base : '/index.js'
// })
// console.log(pathToFile)

// start wqith root is  absolute path like c:\ d:\ \
// but start ith ./ ../ is relative
// console.log("ISABsolute = ",path.isAbsolute(currentFile))
// console.log("ISABsolute = ",path.isAbsolute('/index.js'))

let PAthToDir = path.join('/home','js','dist','index.js')
console.log("path To Dir JOIN - ",PAthToDir)

// console.log("parse - ",path.parse(currentFile))

console.log("Relative path - ",path.relative('/home/user/config',"/home/user/js/"))

console.log("resolve - ",path.resolve())

console.log("normalize = ",path.normalize('//node//user'))





























console.log("------------------------------------------")