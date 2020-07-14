const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

router.get("/", (req, res) => {
	res.send("We are on form");
});

router.post("/", (req, res) => {
	const form = new Form({
		"name": req.body.name,
		"position": req.body.position,
	});
	form
		.save()
		.then((data) => res.json(data))
		.catch((err) => res.json({ message: err }));
});

module.exports = router;
