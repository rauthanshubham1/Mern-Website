import React, { useState, useEffect } from 'react'

const Home = () => {
    const [name, setName] = useState("");

    const displayName = async () => {
        try {
            const response = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json();
            setName(data.name);
        } catch (error) {
            console.log(error);
        }
    }

    const myStyle = {
        "backgroundColor": "white",
        "height": "680px",
        "width": "1200px",
        "padding": "0px",
        "display": "flex",
        "justifyContent": "center",
        "border": "3px solid black"

    }
    const div1 = {
        "backgroundColor": "#fba310",
        "alignItem": "center",
        "width": "600px",
        "textAlign": "right",
        "paddingRight": "10px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center"
    }
    const div2 = {
        "backgroundColor": "#e5e5e5",
        "width": "600px",
        "paddingLeft": "10px",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center"
    }

    useEffect(() => {
        displayName();
    }, [])

    return (
        <div className='container mt-4' style={myStyle}>
            <div style={div1}>
                <h2 style={{ "color": "blue", "fontWeight": "bold", "textDecoration": "underline" }}>Welcome
                    <span> {name}</span></h2>
            </div>
            <div style={div2}>
                <h2 style={{ "color": "black", "fontWeight": "450" }}>We are a Mern Developer</h2>
            </div>
        </div>
    )
}

export default Home