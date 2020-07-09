import React from 'react';


const Login = () => {


    let emailField;
    let passwordField;


    const loginUser = () => {

        alert(emailField.value);
        alert(passwordField.value);
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

        <section className="login-form">
            <form>
                <div className="box">
                    <div className="img">
                        <img src="img/user.png" alt="user"/>
                    </div>
                    <div className="heading">
                        <h4>Welcome Back</h4>
                    </div>
                    <div className="form-fields">
                        <div className="input-box">
                            <input type="text" 
                                className="form-control"
                                placeholder="Enter Email"
                                ref={ 
                                    (elem) => emailField = elem 
                                }
                            />
                            <span><img src="img/email.png"/></span>
                        </div>
                        <div className="input-box">
                            <input type="password" 
                                className="form-control"
                                placeholder="Password" 
                                ref={ 
                                    (elem) => passwordField = elem 
                                }
                            />
                            <span><img src="img/password.png"/></span>
                        </div>
                        <div className="button-box">
                            <button type="submit"
                                onClick={loginUser}
                            >Login</button>
                            <a href="">Forgot Password ?</a>
                        </div>
                    </div>
                    <div className="social-links">
                        <p> or log in with</p>
                        <div className="links-box">
                            <a href="" className="facebook">Facebook</a>
                            <a href="" className="google">Google</a>

                        </div>
                    </div>
                </div>
            </form>
         </section>
    </div>
    )

}

export default Login;


