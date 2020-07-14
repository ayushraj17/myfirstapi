const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const formRoute = require("./routes/form");
const bodyParser = require("body-parser");
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/form", formRoute);
//routes
app.get("/", (req, res) => {
	res.send("We are home");
});

//connect to db
//testing
// CYmqNRc9ZpyCeRiC
mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => console.log("connected")
);

app.listen(8000);
