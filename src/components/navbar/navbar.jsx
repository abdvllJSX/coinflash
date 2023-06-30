import { Link } from 'react-router-dom'

import './navbar.scss'
export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-element">
                    <Link to= '/'>
                        <h1>coinFlash</h1>
                    </Link>
                </div>
            </nav>
        </>
    )
}