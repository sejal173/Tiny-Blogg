//jo blog ke upar comments kiye jayenge

//kis user ne login kiya hai vo pata karneke liye

import { model, Schema } from "mongoose";

// schema crete kiya
const commentsSchema = new Schema(
  {
    content: { type: String, required: true },
    user: { type: Schema.type.objectId, ref: "User", required: true },
    blog: { type: Schema.type.objectId, ref: "Blog", required: true },
  },
  {
    timestamps: true,
  },
);

//model
const Comments = model("Comments", commentsSchema);

export default Comments;
