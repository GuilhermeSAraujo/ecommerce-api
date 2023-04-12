import express from "express";
import cors from 'cors';
const authMiddleware = require("./auth-middleware");

const PORT = process.env.PORT || 3030;

var app = express();
app.use(cors());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

app.use("/", authMiddleware);

app.get("/products", (req, res) => {
	console.log("Calling /products");
	res.json(["toys"]);
});

app.get("/user", (req, res) => {
	console.log("Calling /user");
	res.json({ id: 1, name: "Guilherme" });
});