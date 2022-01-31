// import expres from 'express'

const express = require("express");
// console.log(express);

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoute = require("./api/routes/contact");

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("I am a Middleware Function");
  next();
});

app.use("/api/contacts", contactRoute);

app.get("/", (req, res) => {
  res.send("<div><h1>Hello World</h1> <p>Hello Catians</p></div>");
});

// app.get("/post", (req, res) => {
//   res.send("<h1>I am Post Page</h1>");
// });

// app.get("/api/contacts/", (req, res) => {
//   // res.send("All Contacts");
//   res.json(contacts);
// });

// app.post("/api/contacts", (req, res) => {
//   res.json({
//     message: "I am Post Method",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});

const contacts = [
  { name: "Hm Nayem", email: "somethiing@gmail.com" },
  { name: "Sufia Nayem", email: "adfsf@gmail.com" },
  { name: "alam", email: "dsafasf@gmail.com" },
];
