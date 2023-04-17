import express from "express";
import cors from "cors";
import { setupDepencies } from "./setup.js";
import Middleware from "./src/Middleware/index.js";

const PORT = process.env.PORT || 3030;

var app = express();
app.use(cors());
app.use(express.json());
app.use(Middleware.decodeToken);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const controllers = setupDepencies();

app.get(
	"/products",
	controllers.productsController.ListProducts.bind(
		controllers.productsController
	)
);
app.post(
	"/products",
	controllers.productsController.CreateProduct.bind(
		controllers.productsController
	)
);
