import { AutoComplete, Button } from "antd";
import axios from "axios";
import React, {useState} from "react";
import "./../styles/newBlogform.css";
const NewBlogForm = () =>{
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const submit = () =>{
        axios.post("http://localhost:3001/api/blog-insert",{"title":title,
        "Description": description}).then(res=>{
          alert("Blog Inserted successfully")
        })
    }
  return <>
    <h3>Create a blog</h3>
    <div className="tabs">
        <div className="div-tag"> <span> Title: </span><AutoComplete placeholder="Insert Title here" style={{width:'400px'}} value={title} onChange={e=> setTitle(e)}/></div>
    <div className="div-tag"> <span>Description: </span><textarea style={{width:'500px', marginLeft:"7px"}} placeholder="Insert Decription here" value={description} onChange={e=> {console.log(e);
            setDescription(e.target.value)}}/></div>
        <div className="div-tag">    <Button onClick={submit}>Submit</Button></div>
    
    </div>
        
  </>
}

export default NewBlogForm
