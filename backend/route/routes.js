import express from "express"
import {
    categories,
    updateCategory,
    plant,
    viewCategories,
    viewSingleCategories,
    viewPlant,
    getPlantsByStockStatus,
    viewSinglePlant,
    updatePlant,
    viewnewPlant,
} from "../controllers/product.controllers.js"
import { AddAddress, ViewAdress } from "../controllers/Address.controllers.js"
import { AddOrder, updateOrderStatus, ViewOrder, ViewSingleOrder } from "../controllers/order.controllers.js"
import { blog,updateBlog,viewBlog, viewSingleBlog } from "../controllers/Blogs.js"

const route = express.Router()
route.route('/categorie').post(categories)
route.route('/viewsinglecategorie/:id').get(viewSingleCategories)
route.route('/categorie/:id').put(updateCategory)
route.route('/viewcategorie').get(viewCategories)
route.route('/plant').post(plant)
route.route('/viewplant').get(viewPlant)
route.route('/viewnewplant').get(viewnewPlant)
route.route('/viewplant/:id').get(viewSinglePlant)
route.route('/updateplant/:id').put(updatePlant)
route.route('/viewplantstockstatus').get(getPlantsByStockStatus)
//saveAddress
route.route('/saveaddress').post(AddAddress).get(ViewAdress)
//Order 
route.route('/order').post(AddOrder).get(ViewOrder)
route.route('/order/:orderId').put(updateOrderStatus).get(ViewSingleOrder)
//blog
route.route('/blog').post(blog).get(viewBlog)
route.route('/blog/:id').put(updateBlog).get(viewSingleBlog)

export default route