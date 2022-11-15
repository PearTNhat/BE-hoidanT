import express from 'express'
//
import {homeController} from '../controller/homeController'
import {aboutController} from '../controller/aboutController'
const router = express.Router()
const initWebRoutes=(app)=>{
    router.get('/',homeController.getHomePage)
    router.get('/detail/user/:id',homeController.getDetailPage)
    router.get('/about',aboutController.getAboutPage)
    return app.use('/',router) 
}
export default initWebRoutes