import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context/Context'
import './login.css'
import ErrorMessage from '../elements/ErrorMessage'



function Login() {
    const [userLoginCredentials, setUserLoginCredentials] = useState({ username: '', password: '' })
    const [loginErrorMessage, setLoginErrorMessage] = useState(null)
    const { user, dispatch, isFetching } = useContext(Context)
    //console.log("user", userLoginCredentials)
    //pickup user data
    const handleChange = name => e => {
        const value = e.target.value
        setUserLoginCredentials({ ...userLoginCredentials, [name]: value })
    }

    //get Context

    //send user data for login
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {

            const res = await axios.post('/login', userLoginCredentials)

            console.log("resdata", res.data)
            const { token, others } = res.data
            dispatch({
                type: "LOGIN_SUCCESS", payload: { token, ...others }
            })
            window.location.replace('/')
        }
        catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
            setLoginErrorMessage(error.response.data.error)



        }

    }
    ///set message to empty after 3 sec
    {
        loginErrorMessage && setTimeout(() => {
            setLoginErrorMessage(null)
        }, 3000)
    }
    console.log("user", user)

    return (<>
        {loginErrorMessage && <ErrorMessage>{loginErrorMessage}</ErrorMessage>}
        <div className='container-fluid  centerlogin '>
            <form className="row " onSubmit={handleSubmit}>
                <h1 className="login-header">Login</h1>
                <div className=" col-md-6 offset-md-3 ">
                    <label className="form-label mb-0">Username:</label>
                    <input type="text"
                        onChange={handleChange('username')}
                        className="form-control" id="1" placeholder="please enter username" />


                </div>



                <div className="col-md-6 offset-md-3">
                    <label className="form-label mb-0">Password:</label>
                    <input type="password"
                        onChange={handleChange('password')} className="form-control" id="3" placeholder="password" />




                </div>
                <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn btn-primary mt-2 mb-2 ">Login</button>
                </div>
                <p className='redirectlogin'>
                    <Link to="/register">
                        You do not have an account?/Go to Register page
                    </Link>
                </p>
            </form>

        </div>
    </>)
}

export default Login