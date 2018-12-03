console.log("app started")

const fs = require('fs')

function readData(fileName) {
    fs.readFile(fileName, function () {
        console.log("finished")
    })
}

readData("report.txt")

console.log("app ended")


// function readData(fileName, callback) {
//     fs.readFile(fileName, (error, data) => {
//         callback(data.toString())
//     })
// }