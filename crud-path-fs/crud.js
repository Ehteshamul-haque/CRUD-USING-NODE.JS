const fs = require("fs")
const path = require("path")

const myFilePath = path.join(__dirname, 'files')

// C  R  E  A  T  E
// fs.writeFileSync(`${myFilePath}/post.txt`, 'This is create from crud')

// ----------------------------------------------------------------------------

// R  E  A  D
// fs.readFile(`${myFilePath}/post.txt`, 'utf8' , (err,file) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//         console.log(file)
// })

// ----------------------------------------------------------------------------

// U  P  D  A  T  E
// fs.appendFile(`${myFilePath}/post.txt`, ' This is update(fs.appendFile)', (err) => err ? console.log(err) : console.log("Update Successfully!") )

// ----------------------------------------------------------------------------

// R  E  N  A  M  E
// fs.rename(`${myFilePath}/post.txt`, `${myFilePath}/items.txt`, (err) => err ? console.log(err) : console.log("Rename Successfully!"))

// ----------------------------------------------------------------------------

// D  E  L  E  T  E
fs.unlinkSync(`${myFilePath}/items.txt`)