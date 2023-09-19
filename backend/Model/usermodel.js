import mongoose from 'mongoose';

/* User schema */
const userSchema =new mongoose.Schema(
    {
        password:String,
        email:String,
        cart:Array,
    }
)
export default mongoose.model('User',userSchema)