const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

// const Contact = require("../models/Contact");

const contactController = require("../controllers/contactController");
// const contacts = [];

// Get

router.get("/", contactController.getAllContactController);

// router.get("/", (req, res, next) => {
//   // res.status(200).json({
//   //   // message: "Hello I am all contacts get route",
//   //   // contacts,
//   // });

//   Contact.find()
//     .then((contacts) => {
//       res.status(200).json({
//         message: "All Contacts",
//         contacts,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         message: "Erroer Occured",
//         error: err,
//       });
//     });
// }

// );

// Post

router.post("/", authenticate, contactController.postNewContactController);

// router.post("/", (req, res, next) => {
//   //   const name = req.body.name;
//   //   const email = req.body.email;
//   // contacts.push({
//   //   name: req.body.name,
//   //   email: req.body.email,
//   // });
//   // //   console.log(name, email);
//   // res.status(201).json({
//   //   message: "Data Saved",
//   //   // name,
//   //   // email,
//   // });

//   const contact = new Contact({
//     name: req.body.name,
//     phone: req.body.phone,
//     email: req.body.email,
//   });
//   contact
//     .save()
//     .then((data) => {
//       res.status(201).json({
//         message: "Contact Added",
//         Contact: data,
//       });
//     })
//     .catch((err) => console.log(err));
// });

// Variable Router

// router.get("/:id", (req, res, next) => {
//   //   console.log(req.url);
//   //   const id = req.params.id;
//   //   res.json({
//   //     id,
//   //   });
//   // res.json({
//   //   message: "I am single Contact",
//   // });
// });

router.get("./:id", contactController.getSingleContact);

router.put("/:id", authenticate, (req, res, next) => {
  res.json({
    message: "I am Put Route",
  });
});
router.delete("/:id", authenticate, (req, res, next) => {
  res.json({
    message: "I am delete Route",
  });
});

module.exports = router;
