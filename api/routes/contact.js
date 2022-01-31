const express = require("express");
const router = express.Router();

const contacts = [];

// Get

router.get("/", (req, res, next) => {
  res.status(200).json({
    // message: "Hello I am all contacts get route",
    contacts,
  });
});

// Post

router.post("/", (req, res, next) => {
  //   const name = req.body.name;
  //   const email = req.body.email;

  contacts.push({
    name: req.body.name,
    email: req.body.email,
  });

  //   console.log(name, email);

  res.status(201).json({
    message: "Data Saved",
    // name,
    // email,
  });
});

// Variable Router

router.get("/:id", (req, res, next) => {
  //   console.log(req.url);
  //   const id = req.params.id;
  //   res.json({
  //     id,
  //   });
  res.json({
    message: "I am single Contact",
  });
});

router.put("/:id", (req, res, next) => {
  res.json({
    message: "I am Put Route",
  });
});
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "I am delete Route",
  });
});

module.exports = router;
