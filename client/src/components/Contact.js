import React from 'react'

const Contact = () => {
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
                      <input type="text" placeholder="First Name" />
                      <input type="text" placeholder="Profession" />
                      <input type="email" placeholder="Email" />
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