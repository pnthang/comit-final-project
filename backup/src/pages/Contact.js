import React from 'react'
import {Link} from 'react-router-dom'

function Contact(){
    return (
        <div>
            <h3>Contact page</h3>
            <p>
                Thank for wanting to get in touch
            </p>
            <label htmlFor="">Email:</label>
            <input />
            <hr/>
            <Link to="/about">About me</Link>
        </div>
    )
}

export default Contact;