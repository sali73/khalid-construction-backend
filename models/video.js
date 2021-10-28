//Destructure Schema and model from mongoose
const { Schema, model } = require("mongoose");

const videoSchema = Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  time:{ type: String, required: false },
  video:{ type: String, required: false },

});

const Video = model("Video", videoSchema);
module.exports = Video;
