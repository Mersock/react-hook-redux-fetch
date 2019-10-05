import React, { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
        return () => {

        };
    }, []);

    const postItem = posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    
    return (
        <div>
            {postItem}
        </div>
    )
}

export default Posts
