const fs = require("fs")
const path = require("path")

const dirFilePath = path.join(__dirname,'/files')

//Write multple file into a directry OR folder
// for(let i=0; i<5; i++) {
//     fs.writeFileSync(`${dirFilePath}/Hello${i}.txt`, 'this is text')
// }

//Read multiple file from the directry
fs.readdir(dirFilePath,(error,files) => {
    files.forEach((file) => {
        console.log(file)
    })
})