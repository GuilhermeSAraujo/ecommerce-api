class ProductsController {
	constructor(productService) {
		this.ProductService = productService;
	}

	async CreateProduct(req, res) {
		const product = await this.ProductService.CreateProduct(req.body);
		res.status(201).json(product);
	}

	async ListProducts(req, res) {
		const products = await this.ProductService.ListProducts();
		res.json(products);
	}
}

export default ProductsController;
