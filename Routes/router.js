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
router.post("/addproduct", auth, addProduct); //protected route
router.put("/updateproduct", updateProduct); //protect route after user booking
router.delete("/deleteproduct", auth, deleteProduct); //protected route


router.post('/addnewuser', auth, adduser)
router.get('/users', auth, getallusers) //protected route
router.get('/users/:id', auth, getuserbyid) //protected route 
router.put('/users/:id', auth, updateuser) //protected route
router.delete('/users/:id', auth, deleteuser) //protected route
router.post('/login', userLogin) //protected route

export default router
