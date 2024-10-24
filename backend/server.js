const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const url = process.env.MONGODB_URL;

mongoose.connect(url)
    .then(() => {
        console.log("MongoDB Connection Success!");
           mongoose.connection.once("open", () => {
            console.log("MongoDB is ready!");
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); 
    });

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
