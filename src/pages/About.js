import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import AboutEvenMore from './AboutEvenMore'

function About(){
    return (
        <BrowserRouter>
        <div>
            <h3>About page</h3>
            <p>
                Some short text about me ...
                <Link to='/about/even-more'>Find out about my self</Link>

            </p>
            <Route path='/about/even-more' component={AboutEvenMore}/>
        </div>
        </BrowserRouter>
    )
}

export default About;