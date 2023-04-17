import React from 'react'
import { Link } from "react-router-dom";
import './login-page.css';

function LoginPage() {
    return (
        <div className='login-page'>

            <div className='login-justify'>
                <div className='login-container'>


                    <img className="spca-logo" src={require('./images/spca-logo.png')} alt='SPCA Logo' />

                    <form>
                        <div>
                            <input type="text" placeholder='Username' />
                        </div>
                        <div>
                            <input type="password" placeholder='Password' />
                        </div>
                        <div>
                            <button type="submit">Log In</button>
                        </div>
                    </form>

                    <div>
                        <p> Don't have an account? <Link to="/sign-in">Sign In</Link> </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LoginPage;