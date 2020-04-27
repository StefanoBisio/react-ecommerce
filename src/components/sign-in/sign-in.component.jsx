import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        /* The above is equivalent to typing:
        const value = event.target.value;
        const name = event.target.name; */

        this.setState({[name] : value})

        /* What is what
        - event.target will be the <input> element itself
        - name will be either 'email' or 'password' depending on what is changing
        - value is the content of the input field*/
        console.log(event.target);
        console.log('value is: '+value);
        console.log('name is: '+name);
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                    name="email" 
                    type="email" 
                    label="Email"
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required/>

                    <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required/>

                    <CustomButton type="submit" >
                        Sign in
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;