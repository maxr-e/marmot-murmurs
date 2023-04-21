const connection = require('../config/connection');
const { Post, Comment } = require('../models');

//ceates connection to mongodb
connection.once('open', async () => {
  //delete entries in collection
  await Post.deleteMany({});
  await Comment.deleteMany({});

  //empty array
  const comments = [
    
  ];
  const posts = [

  ];

  //comments for db
  await Comment.collection.insertMany(comments);
  
  //posts array for db
  await Post.collection.insertMany(posts);

  console.table(comments);
  console.table(posts);
  process.exit(0);
});
