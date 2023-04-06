import React from 'react'

const Home = () => {
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

    return (
        <div className='container mt-4' style={myStyle}>
            <div style={div1}>
                <h2 style={{ "color": "blue", "font-weight": "bold", "textDecoration": "underline" }}>Welcome</h2>
            </div>
            <div style={div2}>
                <h2 style={{ "color": "black", "font-weight": "450" }}>We are a Mern Developer</h2>
            </div>
        </div>
    )
}

export default Home