import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ "backgroundColor": "#e3f2fd" }}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="/">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="/">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="/">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="/">REGISTER</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar   