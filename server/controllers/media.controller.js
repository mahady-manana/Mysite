import Media from "../models/media";
const CWD = process.cwd();

const upload = async (req, res, next) => {
    try {
        const files = await req.files;
        for (let i = 0; i < files.length; i++) {
            const filename = files[i].filename;
            const infos = new Media({
                filename : filename,
                uploaded : Date.now()
            });
            await infos.save()
        }    
    } catch (error) {
        next(error)
    }
}
const files = async (req, res, next) => {
    try {
        await Media.find((error, file) => {
            if (error) {
                res.status(404).json(error)
            }
            res.json(file)
        })
    } catch (error) {
        next(error)
    }
}
const file = async (req, res, next) => {
    try {
        await Media.find(req.params.filename, (error, file) => {
            if (error) {
                res.status(404).json(error)
            }
            res.send(file)
        })
    } catch (error) {
        next(error)
    }
}
const remove = async (req, res, next) => {
    try {
        await Media.findByIdAndDelete(req.params.id, (error, file) => {
            if (error || !file) {
                res.send("File not found or an error occured")
            }
            fs.unlink(path.join(CWD, "/uploads/images/" + file.filename), error => {
                if (error) {
                    res.json(error)
                }
                res.send("File deleted successfully!")
            })
        })
    } catch (error) {
        next(error)
    }
}

export default {
    upload,
    files,
    file,
    remove
}