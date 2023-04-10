import React, { useEffect, useState } from 'react'
import shubham from "../images/me.jpeg";
import unknown from "../images/unknown.jpeg";
import { useNavigate } from 'react-router-dom'

const About = () => {
    const [UserData, setUserData] = useState({});
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
            setUserData(data);

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
                <div className='row1'><img src={UserData.name === "Shubham" ? shubham : unknown} alt="" /></div>
                <div className='row2'>
                    <div>
                        <label htmlFor="">User Id:</label>
                        <span>{UserData._id}</span>
                    </div>
                    <div>
                        <label htmlFor="">Name:</label>
                        <span>{UserData.name}</span>
                    </div>
                    <div>
                        <label htmlFor="">Phone:</label>
                        <span>{UserData.phone}</span>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <span>{UserData.email}</span>
                    </div>
                    <div>
                        <label htmlFor="">Profession:</label>
                        <span>{UserData.work}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About