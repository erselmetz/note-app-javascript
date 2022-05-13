const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/create-note-box', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/components/create-note-box.js'))
})

router.get('/note-list', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/components/note-list.js'))
})

router.get('/sidebar', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/components/sidebar.js'))
})

router.get('/add/empty/array', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/components/addEmptyArr.js'))
})

module.exports = router