import express from "express";
import cors from "cors";
import { client } from "./db.js";

import MongoDBProductRepository from "./src/Adapters/MongoDBProductRepository.js";
import DefaultProductService from "./src/Application/DefaultProductService.js";
import ProductsController from "./src/Controllers/ProductsController.js";

const PORT = process.env.PORT || 3030;

var app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const db = client.db("ecommerce");

const productsCollection = db.collection("products");

const productRepository = new MongoDBProductRepository(productsCollection);
const productService = new DefaultProductService(productRepository);
const productsController = new ProductsController(productService);

app.get("/products", productsController.ListProducts.bind(productsController));
app.post("/products", productsController.CreateProduct.bind(productsController));
