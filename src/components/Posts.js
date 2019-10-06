import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.items)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <div>
            
        </div>
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired
};

export default Posts
