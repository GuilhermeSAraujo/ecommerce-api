import express from "express";
import cors from 'cors';
import AuthMiddleware from './auth-middleware.js';

const PORT = process.env.PORT || 3030;

var app = express();
app.use(cors());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

// app.use("/", authMiddleware);

app.get("/hilary", (req, res) => {
	console.log("Calling /hilary");
	res.json({ name: "Hilary Braz Batista", gen: "👩🏽", birthDate: new Date(2002, 10, 4), });
});

app.get("/capitu", (req, res) => {
	console.log("Calling /capitu");
	res.json({ name: "Capitu Braz Batista", gen: "🐶", birthDate: "unknow", });
});