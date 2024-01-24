//\\ بسم الله الرحمن الرحيم //\\
// Create a model for an author, with a name field.

const { model, Schema } = require("mongoose");

const AuthorSchema = new Schema(
  {
    name: String,
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

module.exports = model("Author", AuthorSchema);
