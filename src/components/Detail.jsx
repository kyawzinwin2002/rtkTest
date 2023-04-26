import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../services/blogApi';

const Detail = () => {
    const {id} = useParams();
    const {data : blog} = useGetSingleBlogQuery(id);
    // console.log(blog);
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className=" border p-2 shadow-md flex flex-col  gap-4">
        <img src={blog?.image} className=" w-[200px]" alt="" />
        <h2>{blog?.title}</h2>
        <p>{blog?.desc}</p>
        <div className=" flex gap-3">
          <Link to={`/edit/${blog?.id}`}>
            <button className=" bg-blue-800 text-white px-5 py-1 rounded-md">
              Edit
            </button>
          </Link>
          <Link to={"/"}>
            <button className=" bg-gray-800 text-white px-5 py-1 rounded-md">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail