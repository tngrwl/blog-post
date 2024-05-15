import React,{useEffect, useState} from "react";
import { Table, Space, Modal, AutoComplete } from "antd";
import axios from "axios";

const ViewAllBlogs = () =>{
    const [blogsData, setBlogsData] = useState([]);
    const [modal, setModal] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [id,setId] = useState("");

    const columns = [{key:"title",dataIndex:"title", title:"Title"},
    {key:"Description",dataIndex:"description",title:"Description"},

    {key:"action", title:"action", 
    render: (_, record) => (
        <Space size="middle">
          <button onClick={() => {editButton(record)}}>Edit</button>
          <button onClick={() => {deleteButton(record)}}>Delete</button>
        </Space>
      ),
    }];

    const deleteButton = (record)=>{
        axios.get(`http://localhost:3001/api/blog-delete/`+ record.id).then(res=>{
          getBlogs()
        })
    }
    const editButton = (record)=>{
        console.log(record);
        setDescription(record.description);
        setTitle(record.title);
        setModal(true);
        setId(record.id);
    }

    const getBlogs = () => {
      axios.get("http://localhost:3001/api/blog").then(res=>{
        console.log(res);
        setBlogsData(res.data.data)
    })
    }



    const submit = () =>{
        axios.post("http://localhost:3001/api/blog-update",{"title":title,
        "Description": description, id: id}).then(res=>{
          setModal(false);
          getBlogs();
        })
     
    }

    useEffect(()=>{
      getBlogs()
        
    },[])
  return <>
  <Modal open={modal} onOk={submit} onCancel={() => {
     setModal(false);
  }}>
  <div className="tabs">
        <div className="div-tag"> <span> Title: </span><AutoComplete placeholder="Insert Title here" style={{width:'400px'}} value={title} onChange={e=> setTitle(e)}/></div>
    <div className="div-tag"> <span>Description: </span><textarea style={{width:'500px', marginLeft:"7px"}} placeholder="Insert Decription here" value={description} onChange={e=> {console.log(e);
            setDescription(e.target.value)}}/></div>
        {/* <div className="div-tag">    <Button onClick={submit}>Submit</Button></div> */}
    
    </div>
  </Modal>
    <h3>View all blogs</h3>
    {/* columns={columns} */}
    <Table columns={columns}
        dataSource={blogsData}
    ></Table>
  </>
}

export default ViewAllBlogs
