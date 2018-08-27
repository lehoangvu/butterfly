module.exports = function(app) {
	const mongooseClient = app.get("mongooseClient");
	const { Schema } = mongooseClient;
	const pipe = new Schema(
		{
			url: {
				type: String,
				required: true
			},
			name: {
				type: String,
				required: true
			}
		},
		{
			timestamps: true
		}
	);

	return mongooseClient.model("site", pipe);
};
