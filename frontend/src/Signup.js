import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './Footer.js';


const Signup = () => {

    const [state, setState] = useState(
        {
            registered: false
        }
    )

    let nameField;
    let emailField;
    let passwordField;

    const registerUser = () => {

        fetch('http://localhost:8080/accounts/register', 
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    fullName: nameField.value, 
                    email: emailField.value, 
                    password: passwordField.value
                }
            ),
            headers: {"Content-Type": "application/json"},
        }
        )
        .then(
            (result) => result.json(),
        )
        .then(
            (json) => {
                const { message } = json;
                if(message === "User has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true
                        }
                    )
                } else {
                    setState(
                        {
                            ...state,
                            registered: false
                        }
                    )
                }
            }
        )
    }

    // If the user is loggedIn, redirect them
    if(state.registered === true) {
        return(<Redirect to="/accounts/login"/>)
    }

    else{
        return(

        <div>
            <div className="background-image" style={{backgroundImage: `url(/img/hero.jpg)`}}> 
                <section className="signup-form">
                    <div>
                        <div className="box">
                            <div className="img">
                            <Link 
                                to="/">
                                <img src="/img/twekeslogo.png" alt="twekes"/>
                            </Link>                        
                            </div>
                            <div className="heading">
                                <h4>Create New Account</h4>
                            </div>
                            <div className="form-fields">
                                <div className="input-box">
                                    <input type="text" 
                                        className="form-control"
                                        placeholder="Enter First and Last Name"
                                        ref={ 
                                            (elem) => nameField = elem 
                                        }
                                    />
                                    <span><img src="/img/user.png" alt="user"/></span>
                                </div>
                                <div className="input-box">
                                    <input type="text" 
                                        className="form-control" 
                                        placeholder="Enter Email"
                                        ref={ 
                                            (elem) => emailField = elem 
                                        }
                                    />
                                    <span><img src="/img/email.png" alt="email"/></span>
                                </div>
                                <div className="input-box">
                                    <input type="password" 
                                        placeholder="Password" 
                                        className="form-control"
                                        ref={ 
                                            (elem) => passwordField = elem 
                                        }
                                    />
                                    <span><img src="/img/password.png" alt="password"/></span>
                                </div>
                                <div className="button-box">
                                    <button type="button"
                                        onClick={registerUser}>
                                        Sign Up
                                    </button>
                                    <Link to="/accounts/login">Log In To Account</Link>
                                </div>
                            </div>
                            <div className="other-links">
                                <p> or Sign up with</p>
                                <div className="links-box">
                                    <a href="" className="facebook">Facebook</a>
                                    <a href="" className="google">Google</a>
                                </div>
                                <div className="legal">
                                    <p> By signing up, you agree to our <Link to="/legal/terms">Terms</Link> and <Link to="/legal/privacy">Privacy Policy</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Signup;


