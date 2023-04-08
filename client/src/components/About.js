import React, { useState } from 'react'
import me from "../images/me.jpeg"
const About = () => {
    const [User, setUser] = useState({ name: "", phone: "", email: "", work: "" });

    return (
        <div className="container mt-5">
            <div className="innerBox">
                <div className='row1'><img src={me} alt="" /></div>
                <div className='row2'>
                    <div>
                        <label htmlFor="">Name:</label>
                        <span>{User.name}</span>
                    </div>
                    <div>
                        <label htmlFor="">Phone:</label>
                        <span>{User.phone}</span>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <span>{User.email}</span>
                    </div>
                    <div>
                        <label htmlFor="">Profession:</label>
                        <span>{User.work}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About