import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const [file, setfile] = useState([]);
  const navigate = useNavigate();
  const [token,setToken] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  useEffect(()=>{
    setToken(localStorage.getItem("token"));
  },)
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.set('title', title);
      data.set('description', description);
      data.append('file', file[0]);
      const response = await fetch("http://localhost:8000/post", {
        method: "POST",  
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: data
      })
      if (response.status === 200) {
        alert("post Added");
        navigate('/')

      } else {
       alert("Error");
      }
    } catch (err) {
      console.log("Error:",err);
    }
  };

  return (
    <div className="container">
      <div className="mt-4 col-12 col-lg-8 col-md-10 col-sm-10">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handlePostSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type='file'
                  className="form-control"
                  name='file'
                  onChange={(e) => setfile(e.target.files)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .container{
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:100vh;
        }
        label{
          font-weight:bolder
        }
      `}</style>
    </div>
  );
};

export default CreateBlog;
