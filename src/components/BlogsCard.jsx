import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../services/blogApi';

const BlogsCard = ({blog}) => {
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div className=" border p-2 shadow-md flex flex-col  gap-4">
      <img src={blog.image} className=" w-[200px]" alt="" />
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
      <div className=" flex gap-3">
        <Link to={`/detail/${blog.id}`}>
          <button className=" bg-gray-800 text-white px-5 py-1 rounded-md">
            Detail
          </button>
        </Link>
        <button onClick={() => deleteBlog(blog.id)}  className=" bg-red-500 text-white px-5 py-1 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogsCard