import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  user_id:String,
  title: String,
  description: String,
  date:String,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;