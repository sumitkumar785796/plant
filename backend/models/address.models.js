import { Schema, model } from "mongoose";
const AddressSchema = new Schema({
    fname:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'signupAuth',
        required: true
    }
},{
    timestamps:true
})
export default model('saveAdress', AddressSchema)