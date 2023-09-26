const fs = require('fs')
const T = require('tesseract.js')




T.recognize('./pic.png', 'fas+eng', { logger: e => console.log(e) })
    .then(out => {
        fs.writeFile('Output.txt', `${out.data.text}`, function (err) {
            if (err) throw err
            console.log('File is created successfully.')
        })
    })