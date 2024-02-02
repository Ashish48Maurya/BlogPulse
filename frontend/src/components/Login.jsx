import React from 'react';
import Navbar from './Navbar';

export default function Login() {
    return (
        <>
            <div className="container">
                <div class="login-container">
                    <h2>Login</h2>
                    <form>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
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
