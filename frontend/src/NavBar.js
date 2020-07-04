import React from 'react';

const NavBar = () => {
    return (
        <header>
            <h2><a href="https://www.twekes.com">
                <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
            </a></h2>
            <nav>
                <ul>
                    <li className="howItWorksLink"><a href="#howitworks">How it Works</a></li>
                    <li className="bloglink"><a href="https://www.twekes.com/blog.html">Blog</a></li>
                    <li className="signuplink"><a href="https://www.twekes.com/accounts/signup.html">Sign up</a></li>
                    <li className="loginlink"><a href="https://www.twekes.com/accounts/login.html">Login</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default NavBar;