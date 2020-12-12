import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
    return (
        <div className="wrapper">
            <img id="not-img" src="https://i.imgur.com/qIufhof.png" alt="404 cone"/>
            <div className="info">
                
                Oh No! Went to the wrong part of town! <Link to="/"> Click </Link> to get back to town!
            </div>
        </div>
    )
}

export default NotFound
