import React, { useState } from 'react'
import '../style/login.scss'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {loading, handleRegister} = useAuth()

    const handleSubmit = async(e)=>{
        e.preventDefault()

        await handleRegister({username, email, password})

        navigate("/")
    }
  return (
    <main className="register-page">
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }}
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder='Enter your name' required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Enter your email' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter your password' required />
                </div>
                <button className='button' type='submit'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    </main>
  )
}

export default Register