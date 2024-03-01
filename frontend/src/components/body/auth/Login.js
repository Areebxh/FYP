import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import loginImage from '../../../assets/Rehaish.png'




import { GoogleLogin } from '@react-oauth/google';




const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
  
    const navigate = useNavigate()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }

  
      
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            
            const res = await axios.post('http://localhost:5000/user/login', { email, password });
            setUser({ ...user, err: '', success: res.data.msg });
           
          

            navigate("/profile");

        } catch (err) {
            if (err.response && err.response.data && err.response.data.msg) {
                // If err.response is defined and has data.msg
                setUser({ ...user, err: err.response.data.msg, success: '' });
            } else {
                // Handle other error scenarios
                console.error('Error during API request:', err);
            }
        }
        
    };

    const responseGoogle = async (response) => {
        console.log(response);
        // try {
        //     const res = await axios.post('http://localhost:5000/user/googlelogin', {tokenId: response.tokenId})

        //     setUser({...user, error:'', success: res.data.msg})
        //     localStorage.setItem('firstLogin', true)

        //     navigate.push('/')
        // } catch (err) {
        //     err.response.data.msg && 
        //     setUser({...user, err: err.response.data.msg, success: ''})
        // }
    }
       

    return (

<>

<div className="left-section">
                <img
                    src={loginImage} // Replace with the actual path to your image
                    alt="Login Image"
                />


<div className="login_page">
            <h2>Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/forgot">Forgot your password?</Link>
                </div>
            </form>

            <div className="hr">Or Login With</div>
            <div className="social">
            
   
         <GoogleLogin
       
         buttonText="Login with Google"
         onSuccess={responseGoogle}
         onFailure={() => console.log('Login Failed')}
         cookiePolicy={'single_host_origin'}
      
        />


        </div>

            <p>New Customer? <Link to="/register">Register</Link></p>


            
        </div>

        
        </div>

        </>



    )
}

export default Login
