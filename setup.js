import { client } from "./db.js";
import MongoDBProductRepository from "./src/Adapters/MongoDBProductRepository.js";
import DefaultProductService from "./src/Application/DefaultProductService.js";
import ProductsController from "./src/Controllers/ProductsController.js";

const db = client.db("ecommerce");

const productsCollection = db.collection("products");

export const setupDepencies = () => {
	const productRepository = new MongoDBProductRepository(productsCollection);
	const productService = new DefaultProductService(productRepository);
	const productsController = new ProductsController(productService);
	return { productsController };
};