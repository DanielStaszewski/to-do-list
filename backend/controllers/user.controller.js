const db = require("../models");
const uploadService = require("../services/upload.service");
const singleUpload = uploadService.single("image");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.uploadImage = (req, res) => {
  
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({ message: err.message });
    }
    User.findOne({
      where: {
        Id: req.body.userId
      },
    })
      .then((user) => {
        user.Image = req.file.path;
        return user
          .save()
          .then(() => {
            return res
              .status(200)
              .send({ message: "Image uploaded successfully." });
          })
          .catch(() => {
            return res
              .status(500)
              .send({ message: "Error while uploading image." });
          });
      })
      .catch(() => {
        return res.status(500).send({ message: "User id not found." });
      });
  });
};
