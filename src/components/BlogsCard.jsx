import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({blog}) => {
  return (
    <div className=" border p-2 shadow-md flex flex-col  gap-4">
      <img src={blog.image} className=" w-[200px]" alt="" />
      <h2>{blog.title}</h2>
      <p>{blog.des}</p>
      <Link to={`/detail/${blog.id}`}>
        <button className=" bg-gray-800 text-white px-5 py-1 rounded-md">
          Detail
        </button>
      </Link>
    </div>
  );
}

export default BlogsCard