import express from 'express'
require('dotenv').config()
//
import connection from './config/connectDB'
import configViewEngine from './config/configEngine'
import initWebRoutes from './routes/web'
//
const app = express()
const port = process.env.PORT || 6969;
// config view engine
configViewEngine(app)
// init webpage routes
initWebRoutes(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})