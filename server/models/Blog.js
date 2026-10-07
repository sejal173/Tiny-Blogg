//blog me actural content rahe ga

//kis user ne login kiya hai vo pata karneke liye

import { model, Schema } from "mongoose";

// schema crete kiya
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      default: "draft",
      enum: ["draft", "published", "archived"],
    },
    category: { type: String, required: true },
    publishedAt: { type: Date },
    author: { type: Schema.Types.objectId, reg: "User", required: true },
  },
  {
    timestamp: true,
  },
);

//model
const Blog = model("Blog", blogSchema);

export default Blog;
