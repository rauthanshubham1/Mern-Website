import React from 'react'
import { Link } from "react-router-dom"
const Signup = () => {
    return (
        <div className='container mt-5'>

            <form action="/register" method="post" className='align-items-center'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input htmlFor="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input htmlFor="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input htmlFor="phone" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="work" className="form-label">Profession</label>
                    <input htmlFor="work" type="text" className="form-control" id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input htmlFor="password" type="password" className="form-control" id="exampleInputPassword1" autoComplete='off' />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input htmlFor="confirmPassword" type="password" className="form-control" id="exampleInputPassword1" autoComplete='off' />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <Link className="ms-5" to="/login">Already Registered?</Link>
            </form>

        </div>
    )
}

export default Signup