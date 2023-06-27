import React from 'react'

const LoginPage = () => {
    return (
        <div className='login-page' >
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage