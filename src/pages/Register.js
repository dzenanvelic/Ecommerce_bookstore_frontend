import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'
import {
    sendUserData
} from '../functions/userfunctions'
import Message from '../elements/Message'
import ErrorMessage from '../elements/ErrorMessage'
function Register() {
    const [register, setRegister] = useState({ username: '', email: '', password: '', loading: false, errorMessage: null, message: null })
    const { message, errorMessage } = register

    //pickup users data
    const handleChange = name => e => {
        const value = e.target.value
        setRegister({ ...register, [name]: value })
    }
    //reset message after 3 sec
    {
        message && setTimeout(() => {
            setRegister({ ...register, errorMessage: null, message: null })
        }, 3000) ||
            errorMessage && setTimeout(() => {
                setRegister({ ...register, errorMessage: null, message: null })
            }, 3000)
    }
    //send user to database
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/register', register)
            if (res.data.message) {
                setRegister({
                    ...register, message: res.data.message
                })
                //console.log(res.data.message)

            }
            window.location.replace('./login')

        } catch (error) {

            if (error) {
                setRegister({
                    ...register, errorMessage: error.response.data.error
                })


            }

        }


    }
    return (<>
        {/*      {JSON.stringify(errorMessage)}  */}

        {message && <Message>{message}</Message>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <div className='container-fluid  center '>
            <form className="row  " onSubmit={handleSubmit}>
                <h1 className="login-header">Register</h1>
                <div className=" col-md-6 offset-md-3 ">
                    <label className="form-label mb-0">Username:</label>
                    <input type="text"
                        onChange={handleChange('username')}
                        className="form-control" id="1" placeholder="please enter username" />


                </div>

                <div className="col-md-6 offset-md-3">
                    <label className="form-label mb-0">Email:</label>
                    <input type="email"
                        onChange={handleChange('email')} className="form-control" id="2" placeholder="please enter valid email" />

                </div>

                <div className="col-md-6 offset-md-3">
                    <label className="form-label mb-0">Password:</label>
                    <input type="password"
                        onChange={handleChange('password')} className="form-control" id="3" placeholder="password" />




                </div>
                <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn btn-primary mt-2 mb-2 ">Submit</button>
                </div>

                <p className='redirect'>
                    <Link to="/login">
                        Already have an account?/Go to Login page
                    </Link>
                </p>
            </form>

        </div>
    </>)
}

export default Register