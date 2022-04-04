import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Blog from './pages/Blog'
import About from './pages/About'
import BlogList from "./pages/Blog/blogs"
import BlogDetails from "./pages/Blog/detail"

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/blog' element={<Blog/>}>
    <Route index element={<BlogList/>}/>
    <Route path=':blog' element={<BlogDetails/>}/>
    </Route>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<Navigate to="/"/>}/>
   
    
    </Routes>
  )
}

export default App