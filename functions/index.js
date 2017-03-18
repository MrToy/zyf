const functions = require('firebase-functions')
const cors = require('cors')({origin: true})
// const admin = require('firebase-admin')
// admin.initializeApp(functions.config().firebase)

exports.date = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		res.status(200).send("2333")
	})
})