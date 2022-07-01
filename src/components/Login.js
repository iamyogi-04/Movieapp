import React from 'react'
import { useContext ,useState} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'
import Header from './Navbar2/Header'
import './login.css'
const Login = () => {
    const context = useContext(UserContext)
    const {loginUser} = context
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const handleOnChange = (e) => {
        console.log(e.target.value)
        const {name, value} = e.target
        setLogin({ ...login, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!login.email || !login.password) {
            alert(("Please enter all the required fields!"));
            return
            ;
      
        }
        loginUser(login)
        alert("Login successful!")
    }
    return (
        <>
        <Header/>
        <div className="login">
            <form className='loginform' onSubmit={handleSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={handleOnChange} className="form-control" id="email" placeholder='Email' name='email'/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={handleOnChange} name="password" class="form-control" id="password" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-primary" >Login</button>
                <Link to="/register"><button type="submit" className="btn btn-primary mx-3">Register</button></Link>
                
            </form>
            </div>

        </>
    )
}

export default Login
