import React from 'react'

function Contact() {
    return (
       <div className="Contact">
         <div className='container'>
            <div className="card-wrapper">
                <div className="card ">
                    <div className="card-1">
                    <div className="left">
                        <h2>Company</h2>
                        <span>About Us</span>
                        <span>Services</span>
                        <span>Contact Us</span>
                    </div>
                    <div className="right">
                        <h2>Acount</h2>
                        <span>My Cart</span>
                        <span>Wisslist</span>
                        <span>Login/Register</span>
                    </div>
                    </div>
                </div>
                <div className="card ">
                   <div className="card-2">
                   <h2>Newletter</h2>
                    <span>Subcribe to our newsletter to get more free tips. No Spam, Promise.</span>
                    <div className="line">
                        <span>E-mail</span>
                        <h4>Subscribe</h4>
                    </div>
                   </div>
                </div>
                <div className="card">
                   <div className="card-3">
                   <h2>Get in Touch</h2>
                    <span>69 North Cleveland Street, Memphis,USA.
                        (123) 8111 9210 - (012) 1111 6868
                        Florisr@supportthem.com</span>
                   </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Contact
