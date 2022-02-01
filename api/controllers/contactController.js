const Contact = require("../models/Contact");

const getAllContactController = (req, res, next) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json({
        message: "All Contacts",
        contacts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Erroer Occured",
        error: err,
      });
    });
};

const postNewContactController = (req, res, next) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  contact
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Contact Added",
        Contact: data,
      });
    })
    .catch((err) => console.log(err));
};

const getSingleContact = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id)
    .then((contact) => {
      res.status(200).json({
        contact,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error Occured",
        error: err,
      });
    });

  //   Contact.findById(id).then((contact => {
  //       res.status(200).json({
  //         contact,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.status(500).json({
  //         message: "Error Coccured",
  //         error: err,
  //       })
  //     })

  //   console.log(id);
  //   next();

  //   res.json({
  //     message: "I am single Contact",
  //   });
};

module.exports = {
  getAllContactController,
  postNewContactController,
  getSingleContact,
};
