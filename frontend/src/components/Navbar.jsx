import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" to="/">BlogPulse</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-lg-0 fs-5 fw-semibold">

                        <li className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>


                        <li className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to='/post'>CreatePost</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to='/posts'>Posts</Link>
                        </li>
                    </ul>
                    <form className="d-flex fs-6 fw-medium ms-auto">
                        <button className="btn btn-outline-primary  fw-bolder" type="submit" style={{ maxHeight: "min-content" }} onClick={() => { navigate('/login')}}>Login</button>
                        <button className="btn btn-outline-success ms-2 fw-bolder" type="submit" style={{ maxHeight: "min-content" }} onClick={() => { navigate('/register') }}>SignUp</button>
                        {/* <button className="btn btn-outline-success ms-2 fw-bolder" type="submit" style={{ maxHeight: "min-content" }} onClick={() => {  }}>LogOut</button>
                            <button className="btn btn-outline-success ms-2 fw-bolder" type="submit" style={{ maxHeight: "min-content" }} onClick={() => {  }}>Profile</button> */}
                    </form>
                </div>
                        <style>{`
                       
                        .active{
                            font-weight:bold
                        }
                        .navbar-brand{
                            font-weight:bolder;
                            font-size:25px;
                        }
                        `}</style>
            </div>
        </nav>
    )
}

