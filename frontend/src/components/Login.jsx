import React,{useState} from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { storeTokenInLS } = useAuth();

  const postData = async (event) => {
    event.preventDefault();

    if (!password || !email) {
      return notifyA("All Fields are Required!!!")
    }

    try {
      const response = await fetch("http://localhost:8000/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      if (response.status === 200) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        notifyB("Login Successfull");
        navigate('/');
      }
      else {
        return notifyA("Invalid Credentials!!!")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container">
        <div class="login-container">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <label for="username">Email</label>
              <input
                type="email"
                class="form-control"
                id="mail"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            <button type="submit" class="btn btn-primary" onClick={postData}>Login</button>
          </form>
        </div>
      </div>
      <style>{`
    .container{
        display:flex;
        justify-content:center;
        align-items:center;
        min-height:100vh
    }
    .login-container {
        max-width: 400px;
        width: 90%;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
      }
  
      .login-container h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
      }
  
      .form-group {
        margin-bottom: 20px;
      }
  
      .form-control {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
      }
  
      .btn-primary {
        width: 100%;
        background-color: #3498db;
        border: none;
        border-radius: 5px;
        padding: 10px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      .btn-primary:hover {
        background-color: #27ae60;
      }
  
      .form-group input::placeholder {
        color: #a4a4a4;
      }
  
      .form-group label {
        font-weight: bold;
        color: #333;
      }
  
      @media only screen and (max-width: 600px) {
        .login-container {
          width: 100%;
        }
      }
    `}</style>
    </>
  );
}
