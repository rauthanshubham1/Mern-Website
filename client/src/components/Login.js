import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }
    const loginSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = res.json();

        if (data.status === 400 || !data) {
            window.alert("Invalid Login");
            console.log("Invalid Login");
        } else {
            window.alert("Login successful");
            console.log("Login successful");
            navigate("/");
        }
    }
    return (
        <div className='container mt-5'>
            <form method="POST" className='align-items-center'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={email} onChange={handleEmail} name="email" htmlFor="email" nametype="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={password} onChange={handlePassword} name="password" htmlFor="password" type="password" className="form-control" autoComplete='off' />
                </div>
                <button type="submit" onClick={loginSubmit} className="btn btn-primary">Login</button>
                <Link className="ms-5" to="/register">Not Registered?</Link>
            </form>
        </div>
    )
}

export default Login;