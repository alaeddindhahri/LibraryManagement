const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const books = require("./routes/api/books");


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected !"))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
// Use Routes
app.use('/api/users',users);
app.use('/api/books',books);


const port = process.env.PORT || 5432;

app.listen(port, () => console.log("Server running on port: ", port));
