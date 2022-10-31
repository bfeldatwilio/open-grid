const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
	console.log("Request for root......................................");
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.post("/sign", (req, res) => {
	return res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
