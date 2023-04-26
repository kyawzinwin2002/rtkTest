import React from 'react'
import { useGetBlogsQuery } from '../services/blogApi'
import BlogsCard from './BlogsCard';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const {data : blogs} = useGetBlogsQuery()
    // console.log(blogs);
  return (
    <div className=" mt-5">
      <Link to={"/create"}> 
        <div className=" flex ml-5">
          <button className=" bg-gray-600 text-white px-5 py-2 rounded">
            Create
          </button>
        </div>
      </Link>
      <div className=" flex flex-wrap gap-10 justify-center mt-5">
        {blogs?.map((blog) => {
          return <BlogsCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default Blogs