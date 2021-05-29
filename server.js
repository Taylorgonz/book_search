const express = require("express");

const PORT = process.env.PORT || 3003;
const Models = require('./Models')
const app = express();
const routes = require("./routes")
const mongoose = require('mongoose');
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const uri = "mongodb+srv://taylorgonz-admin:vCyowWOt2NlG58Hh@cluster0.djs8r.mongodb.net/googlebooks?retryWrites=true&w=majority"

mongoose.connect(uri,  () =>
console.log("connected"));    


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
