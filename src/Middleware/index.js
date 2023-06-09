import admin from "../config/firebase-config.js";

class Middleware {
	async decodeToken(req, res, next) {
		try {
			const token = req.headers.authorization.split(' ')[1];
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				console.log(decodeValue);
				return next();
			}
			return res.json({ message: 'Unauthorized' });
		} catch (e) {
			return res.json({ message: `Internal Error = ${e.message}` });
		}
	}
}
export default new Middleware();