import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authtoken")
        navigate("/", {replace: true})
        alert('Logged out sucessfully')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/lastpage" class="navbar-brand" href="#">Moviehub</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={handleLogout}>Logout</a>
                        </li>
                        <li class="nav-item">
                            <Link to="/usermovies" class="nav-link" href="#">User Movies</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar