const express = require('express')
const app = express()
const path = require('path')

// sources
app.use('/css/style',express.static(path.join(__dirname,'./src/css/style.css')))
app.use('/css/bootstrap',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/css/bootstrap.min.css')))
app.use('/js/bootstrap',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')))
app.use('/js/app',express.static(path.join(__dirname,'./src/js/app.js')))
// icon
app.use('/icon/archive-fill',express.static(path.join(__dirname,'./src/icon/archive-fill.svg')))
app.use('/icon/pencil-fill',express.static(path.join(__dirname,'./src/icon/pencil-fill.svg')))
app.use('/icon/three-dots-vertical',express.static(path.join(__dirname,'./src/icon/three-dots-vertical.svg')))
app.use('/icon/trash-fill',express.static(path.join(__dirname,'./src/icon/trash-fill.svg')))

app.use('/components/', require('./components'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/index.html'))
})

app.listen(1001, () => {
    console.log('Listening on port: 1001')
})