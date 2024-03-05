import mongoose, { Schema, models } from "mongoose";

const user =  new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

const User = models.User || mongoose.model("User",user)

export default User;