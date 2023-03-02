import React from 'react'
import { useSelector } from 'react-redux'
const PostLists = () => {
    const postList = useSelector((state)=>state.post)
    const showPost = postList.map((post)=>{
        return( 
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        </div>
    )})
  return (
    <div>
    <h3>post lists:</h3>
    {showPost}</div>
  )
}

export default PostLists