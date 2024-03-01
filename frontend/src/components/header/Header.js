import React from 'react'
import {Link} from 'react-router-dom'


function Header() {

    return (
        <div>
        <header>
            <div className="logo">
                <h1><Link to="/">Rehaish</Link></h1>
            </div>

            <ul>
                {
            
                    <li><Link to="/login"><i className="fa-solid fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
        </header>

                

        </div>
        
    )
}

export default Header
