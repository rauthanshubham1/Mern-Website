import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
const Signup = () => {
    const navigate = useNavigate();
    const [User, setUser] = useState({ name: "", email: "", phone: "", work: "", password: "", confirmPassword: "" });

    const handleInputs = (e) => {
        let eleName = e.target.name;  // we get the name of the element
        let eleValue = e.target.value;
        setUser({
            ...User, [eleName]: eleValue
        })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, confirmPassword } = User;
        const result = await fetch("/register", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, confirmPassword
            })
        })
        const data = await result.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration successful");
            console.log("Registration successful");
            navigate("/login");
        }


    }


    return (
        <div className='container mt-5'>

            <form method="POST" className='align-items-center'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input htmlFor="name" type="text" name="name" className="form-control" aria-describedby="emailHelp" value={User.name} onChange={handleInputs} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input htmlFor="email" type="email" name="email" className="form-control" aria-describedby="emailHelp" value={User.email} onChange={handleInputs} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input htmlFor="phone" type="text" name="phone" className="form-control" aria-describedby="emailHelp" value={User.phone} onChange={handleInputs} />
                </div>
                <div className="mb-3">
                    <label htmlFor="work" className="form-label">Profession</label>
                    <input htmlFor="work" type="text" name="work" className="form-control" value={User.work} onChange={handleInputs} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input htmlFor="password" type="password" name="password" className="form-control" autoComplete='off' value={User.password} onChange={handleInputs} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input htmlFor="confirmPassword" type="password" name="confirmPassword" className="form-control" autoComplete='off' value={User.confirmPassword} onChange={handleInputs} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={postData}>Register</button>
                <Link className="ms-5" to="/login">Already Registered?</Link>
            </form>

        </div>
    )
}

export default Signup