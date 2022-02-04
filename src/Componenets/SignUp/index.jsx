import React from 'react';
import './styles.scss'

function SignUp(props) {
    return (
        <div className='sign-up-container'>
           <div className='sign-up-title'>
                <h3>Sign Up</h3>
           </div>
           <div className='sign-up-input'>
          
  <label for="fname">Your Name:</label>
  <input type="text" id="fname" name="fname" placeholder='Ex: Anhthu Ngo'/>
  <label for="lname">Your email:</label>
  <input type="text" id="lname" name="lname" placeholder='Ex: ngo00074@algonquinlive.com'/>
  <label for="">Your Password:</label>
  <input type="text" id="" name="" placeholder='AnhthuNgo1102@'/>
  <label for="">Re-type your password:</label>
  <input type="text" id="" name=""/>
  <button type='submit'>
      Next
  </button>

           </div>
        </div>
    );
}

export default SignUp;