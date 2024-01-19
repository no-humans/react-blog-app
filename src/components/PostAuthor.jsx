import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/avatar.jpeg'

const PostAuthor = () => {
  return (
    <Link tp={`/posts/users/sdfdf`} className='post__author'>
        <div className="post__author-avatar">
            <img src={avatar} alt=''/>
        </div>
        <div className="post__author-details">
            <h5>By: Ragnar</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor