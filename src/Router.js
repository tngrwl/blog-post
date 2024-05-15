import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import NewBlogForm from "./Pages/NewBlogForm";
import ViewAllBlogs from "./Pages/ViewAllBlogs";
import Home from "./Pages/Home";

const Router = () =>{
 return (<><BrowserRouter>
 <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/new-blog" element={<NewBlogForm/>}/>
    <Route path = "/view-blog" element={<ViewAllBlogs/>}/>
 </Routes>
 </BrowserRouter></>)
}

export default Router

