import { genSalt, hash } from "bcrypt";  // Import both genSalt and hash
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    color: {
        type: Number,
        required: false
    },
    profileSetup: {
        type: Boolean,
        default: false
    }
});

// Middleware to hash the password before saving the user
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next();  // If password hasn't changed, skip hashing
    }

    const salt = await genSalt(10);  // Generate salt with a cost factor of 10
    this.password = await hash(this.password, salt);  // Hash the password using the salt
    next();
});

const User = mongoose.model("Users", userSchema);

export default User;
