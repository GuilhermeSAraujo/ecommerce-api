// import { ProductsAdapter } from '../../db.js';
import ProductService from "./Interface/ProductService.js";

class DefaultProductService extends ProductService {
	constructor(productRepository) {
		super();
		this.ProductRepository = productRepository;
	}

	async CreateProduct(ProductModel) {
		this.ValidateProduct(ProductModel);

		console.log(
			`Calling ProductsAdapter.CreateProduct(${JSON.stringify(ProductModel)})})`
		);

		return this.ProductRepository.CreateProduct(ProductModel);
	}

	async ListProducts() {
		console.log(`Calling ProductsAdapter.ListProducts()`);

		return this.ProductRepository.ListProducts();
	}

	ValidateProduct(ProductModel) {
		if (!ProductModel.name || !ProductModel.category) {
			throw new Error("Invalid Product");
		}
	}
}
export default DefaultProductService;
