import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} style={{width: 250, height: 150}} alt="logo" />
        </Link>
    </aside>