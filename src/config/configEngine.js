import express from 'express';
import ejs from 'ejs'
import path from 'path'
function configViewEngine(app){
    app.use(express.static('./src/public'));
    app.set('view engine','ejs')
    app.set("views", "./src/views");
}
export default configViewEngine