import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createPosts } from "../actions/postActions";

function Postform() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const post = { title, body }
        dispatch(createPosts(post))
    }

    return (
        <div>
            <h1>Add post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Body: </label><br />
                    <textarea
                        name="body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    >
                    </textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
