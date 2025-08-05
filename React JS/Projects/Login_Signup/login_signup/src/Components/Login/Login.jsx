import React from 'react'
import './Login.css'

const Login = ({toggle}) => {
  const submitLogin = (e)=>{
    e.preventDefault()
  }

  const submitSignup = (e)=>{
    e.preventDefault()
  }
  return (
    <>    
    {toggle &&   
      <div className='login'>
        <div className='login_page'>
          <h3 className='login_heading'>Login</h3>
    
          <form action="#" className='login_form'>

            <div className='input_text'>
              <label htmlFor="login_user" id='login_user'>
                  Username : 
              </label>
              <input type="text" className='input_name' placeholder='Enter the username'/>
            </div>

            <div className='input_text'>
              <label htmlFor="login_password" id='login_password'>
                  Password : 
              </label>
              <input type="password" className='input_password' placeholder='Enter the password'/>
            </div>

            <button onClick= {submitLogin} className='submit_login'>Submit</button>
              
          </form>
      </div>
    </div>}

    {!toggle && 
      <div className='signup'>
        <div className='signup_page'>
          <h3 className='signup_heading'>Signup</h3>
    
          <form action="#" className='signup_form'>

            <div className='input_text'>
                
              <label htmlFor="signup_user" id='signup_user'>
                  Username : 
              </label>
              <input type="text" className='input_name' placeholder='Enter the username'/>
            </div>

            <div className='input_text'>
              <label htmlFor="signup_newpassword" id='signup_newpassword'>
                  New Password : 
              </label>
              <input type="password" className='input_newpassword' placeholder='Enter the new password'/>
            </div>

            <div className='input_text'>
              <label htmlFor="signup_password" id='signup_confirm_password'>
                  Confirm Password : 
              </label>
              <input type="password" className='input_confirm_password' placeholder='Enter the confirm password'/>
            </div>

            <button onClick={submitSignup} className='submit_signup'>Submit</button>
              
          </form>
      </div>
    </div>}
  </>
  )
}

export default Login