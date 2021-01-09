import Templates from "../models/templates"

const Create = async (req, res, next) => {
    const post = new Templates(req.body)
    try {
        const result = await post.save()
        res.json(result)
        next()
    } catch (error) {
        res.json(error)
    } 
}
const All = async (req, res, next) => {
    try {
        const templates = await Templates.find().sort(" + created")
        res.json(templates)
    } catch (error) {
        res.json(error)
    }
}
export default {
    Create,
    All
}