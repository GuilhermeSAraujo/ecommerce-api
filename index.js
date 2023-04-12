import express from "express";
const PORT = process.env.PORT || 3030;

var app = express();
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.get("/products", (req, res, next) => {
	res.json(["toys"]);
});

app.get("/user", (req, res, next) => {
	res.json({ id: 1, name: "Guilherme" });
});