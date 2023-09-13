import mongoose from 'mongoose';

const productschema=new mongoose.Schema({
    imageURL:String,
    gender:String,
    productType:String,
    brand:String,
    title:String,
    description:String,
    retailPrice:Number,
    sellingPrice:Number,
})
export default mongoose.model("Product", productschema);