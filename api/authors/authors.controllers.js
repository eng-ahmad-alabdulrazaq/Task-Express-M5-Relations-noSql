// Create routes and controllers for the author model.
const Author = require("../../models/Author");

//creating posts from post control

const postsCreate = async (req, res) => {
  try {
    req.body.authorId = req.author._id; //
    const newPost = await Post.create(req.body);
    await Author.findByIdAndUpdate(req.author._id, {
      $push: { posts: newPost._id },
    });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};
//creating posts from post control

const fetchAuthor = async (authorId, next) => {
  try {
    const author = await Author.findById(authorId);
    return author;
  } catch (error) {
    next(error);
  }
};

const authorsCreate = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

const authorsDelete = async (req, res) => {
  try {
    await Author.findByIdAndRemove({ _id: req.author.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const authorsUpdate = async (req, res) => {
  try {
    await Author.findByIdAndUpdate(req.author.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const authorsGet = async (req, res) => {
  try {
    const authors = await Author.find().populate({
      path: "posts",
      select: "name -_id",
    });
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

//just changed the export way
module.exports = {
  fetchAuthor,
  authorsCreate,
  authorsDelete,
  authorsUpdate,
  authorsGet,
  postsCreate,
};
//just changed the export way
// Create routes and controllers for the author model.
