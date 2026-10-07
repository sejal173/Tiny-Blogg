//kis user ne login kiya hai vo pata karneke liye

import { model, Schema } from "mongoose";

// schema crete kiya
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, requried: true },
  },
  {
    timestamp: true,
  },
);

//model
const User = model("User", userSchema);

export default User;
