const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date:{
    type:String,
    required: true,

  },

  image: {
    type: String,
    required: true,
  },

  
});

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
