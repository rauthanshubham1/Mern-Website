import React, { useEffect } from 'react'
import me from "../images/me.jpeg"
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
    const callAboutYouPage = async () => {
        try {
            const response = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await response.json();
            console.log(data);

            if (!response.status === 200) {
                const err = new Error(response.err);
                throw err;
            }
        } catch (err) {
            console.log(err);
            navigate("/login")
        }
    }

    useEffect(() => {
        callAboutYouPage();
    })


    return (
        <div className="container mt-5">
            <div className="innerBox">
                <div className='row1'><img src={me} alt="" /></div>
                <div className='row2'>
                    <div>
                        <label htmlFor="">Name:</label>
                        <span>{ }</span>
                    </div>
                    <div>
                        <label htmlFor="">Phone:</label>
                        <span>{ }</span>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <span>{ }</span>
                    </div>
                    <div>
                        <label htmlFor="">Profession:</label>
                        <span>{ }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About