class MongoDBProductRepository {
	constructor(productAdapter) {
		this.ProductAdapter = productAdapter;
	}

	async CreateProduct(ProductModel) {
		return this.ProductAdapter.insertOne(ProductModel);
	}

	async ListProducts() {
		return this.ProductAdapter.find().toArray();
	}
}

export default MongoDBProductRepository;
