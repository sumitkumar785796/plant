import { Schema, model } from 'mongoose'
const OrderSchema = new Schema({
    addressId: {
        type: Schema.Types.ObjectId,
        ref: 'saveAdress',
        required: true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'signupAuth',
        required: true
    },
    itemDetails: [],
    status:{
        type:String,
        default:0
    },
    totalPayment:{
        type:Number,
        required:true
    },
    transactionId:{
        type:String,
    }
}, 
{
    timestamps: true
})
export default model('order', OrderSchema)