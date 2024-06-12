import React from "react"
import './header.css'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="/main-logo.png" className="nav-logo" alt="React logo."/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}