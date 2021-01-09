import express from "express";
import media from "../controllers/media.controller";
import multer from "../controllers/multer";

const Router = express.Router()

Router.post("/media/post/", multer, media.upload);
Router.get("/media/files/", media.files);
Router.get("/media/files/:filename", media.file);
Router.delete("/media/files/:id", media.remove);

export default Router;


