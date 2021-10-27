//Destructure Schema and model from mongoose
const { Schema, model } = require("mongoose");

const videoSchema = Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
  time: { type: String, required: false },
  video:{ type: Buffer, required: false },
  likes: { type: Number, default: 0 },

});

const Video = model("Video", videoSchema);
module.exports = Video;
