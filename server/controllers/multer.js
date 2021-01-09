import multer from "multer";
import path from "path";
import fs from "fs";

const CWD = process.cwd();

const storage = multer.diskStorage({
    destination : path.join(CWD, "/ulpoads/upload"),
    filename : (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname.replace(/ /g,"-"))
    }
})
const ulpoad = multer({storage : storage}).array("files", 30)

export default ulpoad;