import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.items)
    const newPost = useSelector(state => state.posts.item)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if(Object.keys(newPost).length !== 0){
        posts.unshift(newPost)
    }

    const postItem = posts.map(post => (
        <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </li>
    ))

    return (
        <div>
            <ul>
                {postItem}
            </ul>
        </div>
    )
}

export default Posts
