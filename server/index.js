/*
* npm packages
* from /node_modules 
*/
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import devBuilder from "./devCompiler.js";
import path from "path";
import mongoose from "mongoose";
// npm packages import : END


/*
* Internals Module
* ENV. Configuration
* Routers
*/
import config from "./utils/config";
import Templates from "./routers/templates";
import Media from "./routers/media";
// Internals module import END

const app = express();
const CWD = process.cwd()


// Webpack compiler
devBuilder(app);

// Cross Origin Resource Sharing 
app.use(cors());
// Parse body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Join [[build]] directory as static assets
app.use("/build", express.static(path.join(CWD, "/build/")))
// Join [[uploads]] directory as static assets 
app.use(express.static(path.join(CWD, "/build/")))
app.use(express.static(path.join(CWD, "/uploads/")))
app.use(express.static(path.join(CWD, "/assets/")))

// Media routers
app.use("/", Media);
// Templates routers
app.use("/", Templates);

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(CWD,'client','public', 'index.html'))
})
app.get('*', (req, res) => {
	res.status(200).sendFile(path.join(CWD,'client','public', 'index.html'))
})

// Connection to mongoDB database
mongoose.connect(config.mongoURI, {
	useUnifiedTopology : true,
	useFindAndModify : false,
	useCreateIndex : true,
	useNewUrlParser : true
}, error => {
	if (error) {
		console.error(error)
	}
	console.log("Connection to DB Successfully!")
})
// Listen app
app.listen(config.port, () => {
	console.log(`Server run at : ${config.port}`)
})