import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/providers">Providers</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/">Appointments</Link>
            </li>
            {
                (localStorage.getItem("ca_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("ca_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        
            </ul>
    )
}
