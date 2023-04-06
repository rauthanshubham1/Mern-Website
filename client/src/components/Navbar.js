import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import mernlogo from "../images/mernlogo.png"
const Navbar = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  navbar-light bg-light">

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img style={{
                            "height": "30px",
                            "width": "170px"
                        }} src={mernlogo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/about">ABOUT YOU</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/contact">CONTACT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/login">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-3" aria-current="page" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div >
    )
}

export default Navbar   