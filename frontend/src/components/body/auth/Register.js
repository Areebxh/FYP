import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import { isEmail,isEmpty,isLength,isMatch,isValidNumber } from '../../utils/validation/Validation'
import loginImage from '../../../assets/Rehaish.png'
import '../../../styles/register.css'


const initialState = {
    name:'',
    email: '',
    password: '',
    cf_password:'',
    phone:'',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)
    const [role, setRole] = useState(0);
  
    const Navigate = useNavigate()
    const {name,email, password,cf_password,phone, err, success} = user
    const user_role =role;
    

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
       
        if(isEmpty(name) || isEmpty(password) || isEmpty(phone) )
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        if(!isValidNumber(phone))
            return setUser({...user, err: "Invalid phone number.", success: ''})

            try {
                const res = await axios.post('http://localhost:5000/user/register', { name,email, password,phone,user_role });
                setUser({ ...user, err: '', success: res.data.msg });
              
                
            } catch (err) {
                if (err.response && err.response.data && err.response.data.msg) {
                    // If err.response is defined and has data.msg
                    setUser({ ...user, err: err.response.data.msg, success: '' });
                } else {
                    // Handle other error scenarios
                    console.error('Error during API request:', err);
                }
            }
            
            
    }
    

    

    return (
        <body className='login-page'>
        <div className="section">
                <img
                    src={loginImage} // Replace with the actual path to your image
                    alt="Login Image"
                />

        
        <div className="register">
            <h2>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>

            <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>
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
            

                <div>
                    <label htmlFor="cf_password">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="Enter Phone no" id="phone"
                    value={phone} name="phone" onChange={handleChangeInput} />
                </div>

                <div className="toggle-section">
          <label htmlFor="role">Select Role</label>
          <div className="toggle-buttons">
            <label>
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 0}
                onChange={() => setRole(0)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="hostelOwner"
                checked={role === 1}
                onChange={() => setRole(1)}
              />
              Hostel Owner
            </label>
          </div>
        </div>

            

                <div className="row">
                    <button type="submit">Register</button>
                </div>
            </form>

            <p>Already an account? <Link to="/login">Login</Link></p>

          
        </div>
        </div>
        </body>
    )
}

export default Register
