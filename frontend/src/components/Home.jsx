import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

export default function Home() {
  const {token} = useAuth();
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/getPosts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
       
      });

      if (response.status === 200) {
        const res_data = await response.json();
        console.log(res_data.posts);
        setList(res_data.posts || []);
      } else {
        alert("Invalid Credentials!!!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    return date.toLocaleString('en-US', options);
  }


  useEffect(() => {
    console.log("Call")
    getData();
  }, [])



  return (

    <>
      {list.length > 0 ? (
        list.map((ele) => (
          <div className="container" key={ele._id}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-10 col-12 flex">
                <img className="mx-auto my-auto" src={`http://localhost:8000/${ele.image}`} alt="Img" />
              </div>
              <div className="col-lg-6 col-md-5 right mt-2 col-12 mb-3">
                <h2 className="text-warning">{ele.title}</h2>
                <div className="flex">
                  <div className="time">{formatTimestamp(ele.timestamps)}</div>
                  <div className="name">{ele.author}</div>
                </div>
                <p>${ele.description.slice(0, 500) + "....."}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      <style>
        {`
        img {
          max - height: 250px;
        width:60%;
        }

        .name {
          font-style: italic;
        font-weight: bolder;
        color: coral
    }

        .time {
          color: gray;
        color: coral
    }

        .flex {
          display: flex;
        justify-content: space-between;
        align-items: center;
    }

        h2,
        p {
          color:white;
          margin: 7px 0;
    }
    p{
      font-size: 17px;
      font-weight: 400;
    }

        .right {
          padding: 15px;
    }

        
        @media only screen and (max-width: 600px) {
          img {
          width: 100%;
        }
        .left{
          text - align: center;
        }
        h2{
          font - size: 25px;
        }
        p{
          font - size: 20px;
        }
      }

        @media only screen and (max-width: 992px) {
          img{
          width: 100%;
        }
      `}

      </style>
    </>

  )
}
