import React from 'react';
import './Login.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ' ',
            password: ' '
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: ' ',
                password: ''});
        } catch (error) {
            console.log(error)
        } 
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I allready have an account</h2>
                <span>Sign in With your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email} required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className='button'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;