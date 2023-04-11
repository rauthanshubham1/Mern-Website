import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const userContact = async () => {
    try {
      const response = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUserData(data);

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
                <form action="/contact" method='post'>
                  <div className="grid-50-50">
                    <input type="text" placeholder="Name" value={userData.name} />
                    <input type="text" placeholder="Profession" value={userData.work} />
                    <input type="email" placeholder="Email" value={userData.email} />
                  </div>
                  <div className="grid-full">
                    <textarea placeholder="Anything..." cols="30" rows="10"></textarea>
                    <input type="submit" value="Submit" />
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