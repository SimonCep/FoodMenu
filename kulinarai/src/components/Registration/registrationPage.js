import React, {useState} from 'react'
import { Button } from "react-bootstrap";
import "./registrationPage.css"

function RegistrationPage(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleChange = (e) =>{
        e.preventDefault();
        console.log(e);
    }
    return(
        <div>
                <div className="heading">
                    <h1>Registration Page</h1>
                </div>

            <div className="registration-page">
                <form className="registration-form">
                    <label htmlfor="name">Name</label>
                    <input type="text" placeholder='eg. Tom' id="name" name="name"/>
                    <label htmlfor="surname">Surname</label>
                    <input type="text" placeholder='eg. Jonson' id="surname" name="surname"/>
                    <label htmlfor="email">Email</label>
                    <input type="email" placeholder='eg. tomjonson@gmail.com' id="email" name="email"/>
                    <label htmlfor="password">Password</label>
                    <input type="password" placeholder='eg. ****************' id="password" name="password"/>
                    <label htmlfor="confirm">Confirm Password</label>
                    <input type="password" placeholder='eg. ****************' id="confirm" name="confirm"/>

                    <div className="button-rigth" style={{padding: 15}}>
                        <Button type="submit" style={{paddingRight: 125, paddingLeft: 125}}>Register</Button>
                    </div>
                    <a style={{fontSize: 18}} href="/LogInPage">Already have an account? Log In here</a>
                </form>
            </div>
            
        </div>
    )

}

export default RegistrationPage;