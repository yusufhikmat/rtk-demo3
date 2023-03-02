import React from 'react'
import { useState } from 'react'


const PostForm = () => {
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')

  return (
    <div>
        <h2>Add a new post</h2>
        <form>
            <div>
            <label>Add Title</label>
                <input 
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    />
                </div>
                <div>
            <label>Add Title</label>
                <input 
                    type="text"
                    name="postContent"
                    id="postContent"
                    onChange={(e)=>setContent(e.target.value)}
                    value={content}
                    />
                </div>
                <button>Submit</button>
        </form>
    </div>
  )
}

export default PostForm