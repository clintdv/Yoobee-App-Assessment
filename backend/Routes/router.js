import express from 'express'
import auth from '../middleware/auth.js'
import 'dotenv/config'
const router = express.Router()
import {
  homepage,
  getProductslists,
  getProductbyid,
  addProduct,
  updateProduct,
  deleteProduct,
  getProducyBySellerID,
  getProductByCategory,
  updateCart,
} from "../Controller/productController.js";
import {
    getallusers,
    getuserbyid,
    updateuser,
    deleteuser,
    userLogin,
    adduser,
} from './../Controller/userController.js'


router.get('/', homepage)
router.get("/productslist", getProductslists);
router.get("/proudctslist/:id", getProductbyid);
router.get("/productslist/category/:category", getProductByCategory);
router.get("/productslist/seller/:id", getProducyBySellerID);
router.post("/updateusercart", auth, updateCart); //protected route
router.post("/addproduct", auth, addProduct); //protected route
router.put("/updateproduct/:id", updateProduct); //protect route after user booking
router.delete("/deleteproduct/:id", auth, deleteProduct); //protected route


router.post('/addnewuser', adduser)
router.get('/users', auth, getallusers) //protected route
router.get('/users/:id', auth, getuserbyid) //protected route 
router.put('/users/:id', auth, updateuser) //protected route
router.delete('/users/:id', auth, deleteuser) //protected route
router.post('/login', userLogin) //protected route

export default router
