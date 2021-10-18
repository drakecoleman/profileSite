const mongoose = require("mongoose");

require("dotenv").config();

const conn = process.env.DB_STRING;

const connection = mongoose.connect(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
  admin: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = connection;
