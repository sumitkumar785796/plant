import { Schema, model } from 'mongoose'

const blogs = new Schema({
  blogname: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default model('Blog', blogs)
