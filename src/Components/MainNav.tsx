import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
    return (
        <div className='main_nav'>
            <div className="container">
                <div className="nav_align">
                    <div className="logo">Logo</div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Cart</Link></li>
                            <li><Link to="/">Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
