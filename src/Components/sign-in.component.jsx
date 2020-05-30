import React from 'react';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import {auth , signInWithGoogle} from '../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component{
 constructor()
 {
     super();
     this.state = { email:"",password:""};
 }

handleSubmit = async event =>
{
    event.preventDefault()
     
    const {email,password} = this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});

    }
    catch(error) {
        console.log(error);
    }
    

}
handleChange = event => 
{
    const {value , name} = event.target;
    this.setState({[name]:value});
}

 render()
 {
     return( <div className="sign-in">

        <h2> I alreay have an account </h2>
        <span>Sign in with your email and password</span> 
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" label="Email" type="email" value={this.state.email} onChange={this.handleChange} required />
      
          <FormInput name="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange} required />
        
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>

        </form>
     </div>

     )
 }

}

export default SignIn;