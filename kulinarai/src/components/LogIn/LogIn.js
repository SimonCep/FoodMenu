import React, {useState} from 'react';
import { Button } from "react-bootstrap";
import "./LogIn.css";

function LogInPage(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return(
        <div>
            <div className="heading">
                <h1>Log In Page</h1>
            </div>
            <div className="logIn">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlfor='email'>Email adress</label>
                    <input type="email" placeholder='you@gmail.com' id="email" name="email"/>
                    <label htmlfor='password'>Password</label>
                    <input type="password" placeholder='**********' id="password" name="password" />

                    <div style={{padding: 15}}>
                    <Button type="submit" style={{paddingRight: 125, paddingLeft: 125}} >Log In</Button>
                    </div>
                    <a style={{fontSize: 18}} href="/RegistrationPage">Don't have an account? Register here</a>
                </form>
            
            </div>
        </div>
    )

}

export default LogInPage;