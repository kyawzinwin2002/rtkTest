import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TextInput } from "@mantine/core";
import { useEditBlogMutation, useGetSingleBlogQuery } from '../services/blogApi';


const Edit = () => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");

    const [editBlog] = useEditBlogMutation()
    const {data:blog} = useGetSingleBlogQuery(id)
    const nav = useNavigate()

    useEffect(() => {
        setTitle(blog?.title)
        setDesc(blog?.desc)
        setImage(blog?.image)
    },[blog])

    const submitHandler= (e) => {
        e.preventDefault();
        const newData = {id,title,desc,image};
        editBlog(newData)
        nav("/")
    }

  return (
    <div className=' flex flex-col h-screen justify-center items-center'>
        <h1 className=' my-5 font-bold text-gray-600 text-3xl'>Edit Your Blog</h1>
      <form onSubmit={submitHandler} className=" w-96 flex flex-col gap-7">
        <TextInput
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          label="Title"
          withAsterisk
        />
        <TextInput
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter Description"
          label="Description"
          withAsterisk
        />
        <TextInput
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter Image URL"
          label="Image"
          withAsterisk
        />
        <div className=" flex gap-3 justify-end">
          <button
            className=" text-white bg-blue-700 px-7 py-2 rounded-md"
            type="submit"
          >
            Done
          </button>
          <Link to={"/"}>
            <button className=" text-white bg-gray-600 px-7 py-2 rounded-md">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Edit