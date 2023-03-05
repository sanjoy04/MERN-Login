const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/react-login")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((e) => {
    console.log("Failed");
    console.log(e);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
