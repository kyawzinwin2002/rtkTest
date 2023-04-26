import React, { useState } from 'react'
import { TextInput } from "@mantine/core";
import { useNewBlogMutation } from '../services/blogApi';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");

    const [newBlog] = useNewBlogMutation();
    const nav = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = {id:Date.now(),title,desc,image}
        console.log(newData);
        newBlog(newData)
        nav("/")
    }

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="">
        <h1 className=' text-3xl text-gray-700 mb-5 font-bold'>Create New Blog</h1>
        <form onSubmit={submitHandler} className=" w-96 flex flex-col gap-7">
          <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" label="Title" withAsterisk />
          <TextInput value={desc} onChange={e => setDesc(e.target.value)}
            placeholder="Enter Description"
            label="Description"
            withAsterisk
          />
          <TextInput value={image} onChange={e => setImage(e.target.value)} placeholder="Enter Image URL" label="Image" withAsterisk />
          <div className=" flex gap-3 justify-end">
            <button className=' text-white bg-blue-700 px-7 py-2 rounded-md' type="submit">Done</button>
            <button className=' text-white bg-gray-600 px-7 py-2 rounded-md'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create