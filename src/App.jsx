import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App