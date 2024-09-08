import { Schema, model } from 'mongoose'

const plantSchema = new Schema({
  plantname: { type: String, required: true },
  desc: { type: String },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  stockStatus: {
    type: String,
    enum: ['Available', 'Low Stock', 'Not Available'],
    default: 'Available',
    required: true
  },
  qty: { type: Number, required: true }
}, { timestamps: true });

plantSchema.pre('save', function(next) {
  if (this.qty > 10) {
    this.stockStatus = 'Available';
  } else if (this.qty > 0 && this.qty <= 10) {
    this.stockStatus = 'Low Stock';
  } else {
    this.stockStatus = 'Not Available';
  }
  next();
});

export default model('Plant', plantSchema)
