// Create routes and controllers for the author model.
const express = require("express");
const router = express.Router();
const {
  fetchPost,
  postsGet,
  postsUpdate,
  postsDelete,
  createTag,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  const post = await fetchPost(postId, next);
  if (post) {
    req.post = post;
    next();
  } else {
    const err = new Error("Post Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", postsGet);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

router.post("/addTag", createTag);

router.post("/:postId/:tagId", addTag);

module.exports = router;
// Create routes and controllers for the author model.
