const fs = require("fs")

const myArgData = {
    title : process.argv[2],
    post  : process.argv[3]
}

const { title, post } = myArgData
fs.writeFileSync(title,post)