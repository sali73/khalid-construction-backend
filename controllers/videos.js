const express = require("express");
const router = express.Router();
const Video = require("../models/video.js");

///////////////////
//Index Route
//////////////////
router.post("/", async (req, res) => {
  try {
    const createdVideo = await Video.create(req.body);
    res.status(200).json(createdVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const getVideo = await Video.find({});
    res.status(200).json(getVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

///////////////////
//Delete Route
///////////////////
router.delete("/:id", async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

///////////////////
//Edit Route
///////////////////
router.put("/:id", async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
