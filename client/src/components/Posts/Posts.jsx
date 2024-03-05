import React from 'react'
import Post from './Post/Post.jsx'
import {useSelector} from "react-redux"

const Posts = () => {
  const posts=useSelector((store)=>store.posts)
  console.log(posts)
  return (
    <>
    <h2>Posts</h2>
    <Post/>
    <Post/>
    </>
  )
}

export default Posts