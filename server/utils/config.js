const port = process.env.PORT || 7000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/templates_db";

export default {
    port,
    mongoURI
}