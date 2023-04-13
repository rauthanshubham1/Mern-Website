import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
  // const [message, setMessage] = useState("");
  const userContact = async () => {
    try {
      const response = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (!response.status === 200) {
        const err = new Error(response.error);
        throw err;
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }



  useEffect(() => {
    userContact();
  }, [])



  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    // setMessage(value);
  }

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const response = await fetch("/contact",
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      })

    const data = await response.json();
    if (!data) {
      console.log("Message not send");
    } else {
      alert("Message sent");
      // setUserData(...userData "");
    }
  }
  return (
    <div>
      <section className="footer_get_touch_outer">
        <div className="container">
          <div className="footer_get_touch_inner grid-50-30">
            <div className="colmun-70 get_form">
              <div className="get_form_inner">
                <div className="get_form_inner_text">
                  <h3>Get In Touch</h3>
                </div>

                <form action="/contact" method='POST'>
                  <div className="grid-50-50">
                    <input type="text" name="name" value={userData.name} onChange={handleData} placeholder="Name" />
                    <input type="text" name='phone' value={userData.phone} onChange={handleData} placeholder="Profession" />
                    <input type="email" name="email" value={userData.email} onChange={handleData} placeholder="Email" />
                  </div>
                  <div className="grid-full">
                    <textarea name="message" value={userData.message} onChange={handleData} placeholder="Anything..." cols="30" rows="10" ></textarea>
                    <input type="submit" onClick={contactForm} value="Submit" />
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact