import express from 'express'
require('dotenv').config()
//
import configViewEngine from './configs/configEngine'
const app = express()
const port = process.env.PORT || 6969;
configViewEngine(app)
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})