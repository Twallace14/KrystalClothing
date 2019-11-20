import React from 'react';
import Login from '../../logIn/Login';
import SignUp from '../../signUp/SignUp';
import './SignInStyles.scss'
const SignIn = ()=> (
    <div className='sign-in-and-sign-up'>
        <Login/>
        <SignUp/>
    </div>
);

export default SignIn;