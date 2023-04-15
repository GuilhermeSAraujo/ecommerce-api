import express from "express";
import cors from "cors";
import { setupDepencies } from "./setup.js";

const PORT = process.env.PORT || 3030;

var app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const controllers = setupDepencies();

app.get("/products", controllers.productsController.ListProducts.bind(controllers.productsController));
app.post("/products", controllers.productsController.CreateProduct.bind(controllers.productsController));
