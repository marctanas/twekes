import React, {useState} from 'react';


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
            body: JSON.stringify({fullName: nameField.value, email: emailField.value, password: passwordField.value}),
            headers: {"Content-Type": "application/json"},
        }
        )
        .then(
            (result) => result.json(),
        )
        .then(
            (json) => {
                console.log('response from backend', json)
                setState(
                    {
                        registered: true
                    }
                )
            }
        )
    }

    return(

    <div>

        <header>
            <h2><a href="https://www.twekes.com">
                <img src="img/twekeslogo.png" width="130" height="40" alt="twekes"/>
                </a></h2>
        </header>

        <section className="noMasterImage">
            <div className="background-image" > </div>
        </section>

        <section className="signup-form">
            <form>
                <div className="box">
                    <div className="img">
                        <img src="/img/user.png" alt="user"/>
                    </div>
                    <div className="heading">
                        <h4>Create Account</h4>
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
                            <span><img src="/img/user.png"/></span>
                        </div>
                        <div className="input-box">
                            <input type="text" 
                                className="form-control" 
                                placeholder="Enter Email"
                                ref={ 
                                    (elem) => emailField = elem 
                                }
                            />
                            <span><img src="/img/email.png"/></span>
                        </div>
                        <div className="input-box">
                            <input type="password" 
                                placeholder="Password" 
                                className="form-control"
                                ref={ 
                                    (elem) => passwordField = elem 
                                }
                            />
                            <span><img src="/img/password.png"/></span>
                        </div>
                        <div className="button-box">
                            <button type="submit"
                                onClick={registerUser}
                            >Sign Up</button>
                            <a href="https://www.twekes.com/accounts/login">Log In To Account</a>
                        </div>
                    </div>
                    <div className="social-links">
                        <p> or Sign up with</p>
                        <div className="links-box">
                            <a href="" className="facebook">Facebook</a>
                            <a href="" className="google">Google</a>
                        </div>
                        <div className="legal">
                            <p> By signing up, you agree to our <a href="https://www.twekes.com/legal/terms">Terms</a> and <a href="https://www.twekes.com/legal/privacy">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
    )

}

export default Signup;


