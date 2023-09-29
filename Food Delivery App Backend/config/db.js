const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.mongoUrl;

const connection = mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

connection
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

module.exports = {
    connection
};
