import React from 'react'
import { useGetBlogsQuery } from '../services/blogApi'
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const {data : blogs} = useGetBlogsQuery()
    // console.log(blogs);
  return (
    <div className=' flex flex-wrap gap-10 justify-center'>
        {blogs?.map(blog => {
            return(
                <BlogsCard key={blog.id} blog={blog}/>
            )
        })}
    </div>
  )
}

export default Blogs