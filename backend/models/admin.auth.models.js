import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"
const authSchema = new Schema({
    adminfullname: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    adminemail: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })

authSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

authSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default  model('adminAuth', authSchema)

