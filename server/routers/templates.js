import express from "express";
import Templates from "../controllers/templates";

const Router = express.Router()

Router.post("/templates/post/", Templates.Create);
Router.get("/templates/all/", Templates.All)


export default Router;