import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='container mt-5'>
            <form action="/login" method="post" className='align-items-center'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input htmlFor="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input htmlFor="password" type="password" className="form-control" id="exampleInputPassword1" autoComplete='off' />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link className="ms-5" to="/register">Not Registered?</Link>
            </form>


        </div>
    )
}

export default Login