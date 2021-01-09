import React, { useState, useEffect } from "react"
import axios from "axios"

const Post = props => {

const [values, setValues] = useState({
    title : "",
    content : "",
    author : ""
})

const handleChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const val = event.target.value;
    setValues({...values, [name] : val})
}
const submitTempltes = event => {
    event.preventDefault();
    const formData = {
        title : values.title,
        content : values.content,
        author : values.author
    }
    axios.post("/templates/post", formData)
         .then(res =>{
             console.log("Added")
         })

}
return (
<article>
    <div>
        <h1>Post</h1>
    </div>
    <form onSubmit={submitTempltes}>
        <div className="form-group">
            <input type="text" className="form-control" name="title" placeholder="title" value={values.title} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" name="content" placeholder="content" value={values.content} onChange={handleChange}/>
        </div>
        <div className="form-group">
            <input className="form-control" type="text" name="author" placeholder="author" value={values.author} onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</article>    
)
}

export default Post;