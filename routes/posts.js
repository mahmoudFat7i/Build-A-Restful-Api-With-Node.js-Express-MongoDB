const express = require('express');
const PostModel = require('../models/PostModel');
const router = express.Router();

//get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific posts
router.get('/:postId', async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete specific post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await PostModel.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update specific posts
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await PostModel.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//submit new post
router.post('/', async (req, res) => {
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
