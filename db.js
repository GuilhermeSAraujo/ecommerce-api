import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://ecommerce-app:${process.env.DB_PASSWORD}@cluster0.e0jmbnb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	await client.connect();

	await client.db("ecommerce").command({ ping: 1 });

	console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
run().catch(console.dir);

export { client };
