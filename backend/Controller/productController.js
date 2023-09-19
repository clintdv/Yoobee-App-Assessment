import Product from "../Model/mongoose.js";
import User from "../Model/usermodel.js";


export const homepage=(req,res)=>{
    res.send('Welcome to Homepage');
}

export const getProductslists = async (req, res) => {
  try {
    const Productslist = await Product.find();
    res.json(Productslist);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getProductbyid = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

export const addProduct = (req, res) => {

    if (req.body.imageURL == null || req.body.imageURL == "") {
      return res.status(400).send({
        message: "Image URL cannot be empty",
      });
    }

  const product = new Product({
    imageURL:req.body.imageURL,
    gender:req.body.gender,
    productType:req.body.productType,
    brand:req.body.brand,
    title:req.body.title,
    description:req.body.description,
    retailPrice:req.body.retailPrice,
    sellingPrice:req.body.sellingPrice,
    sellerid:req.body.sellerid,
  });
  product
    .save()
    .then((result) => {
      res.json({ message: "Product added successfully" });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

export const getProducyBySellerID = async (req, res) => {
  try {
    const product = await Product.find({ sellerid: req.params.id });
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const product = await Product.find({ productType: req.params.id });
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
}


export const updateProduct = (req, res) => {
  const id = req.params.id;
  if(id==null || id==""){
    return res.status(400).send({
        message: "Product ID cannot be empty",
        });
  }
  const updatedProduct = {
    imageURL: req.body.imageURL,
    gender: req.body.gender,
    productType: req.body.productType,
    brand: req.body.brand,
    title: req.body.title,
    description: req.body.description,
    retailPrice: req.body.retailPrice,
    sellingPrice: req.body.sellingPrice,
  };
  Product.findByIdAndUpdate(id, updatedProduct, { new: true })
    .then((result) => {
      res.json({ message: "Product updated successfully" });
    })
    .catch((error) => {
      res.json({ message: error });
    });
};

export const deleteProduct=(req,res)=>{
    const id = req.params.id;
    console.log(id);
    Product.findByIdAndDelete(id)
      .then((result) => {
        res.json({ message: "Product deleted successfully" });
      })
      .catch((error) => {
        res.json({ message: error });
      }); 
}


export const updateCart = async (req, res) => {
  const userid = req.body.userid;
  const cart = req.body.cart;
  if (userid == null || userid == "" ) {
    return res.status(400).send({
      message: "User ID or Product ID cannot be empty",
    });
  }
  try {
    const user = await User.findById(userid);
    if (user == null) {
      return res.status(400).send({
        message: "User not found",
      });
    }
    User.findByIdAndUpdate(userid, { cart: cart }, { new: true })
      .then((result) => {
        res.json({ message: "Product added to cart successfully" });
      })
      .catch((error) => {
        res.json({ message: error });
      });
  }
   catch (err) {
    res.json({ message: err });
  }
}