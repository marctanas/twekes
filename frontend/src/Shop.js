import React, { useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';


const Shop = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    return (   
        <div>
            <header>
                <h2><Link 
                    to="/shop">
                    <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
                </Link></h2>
                <nav>
                    <ul>
                        <li className="loginLink">
                            {   
                                globalState.loggedIn === true && 
                                <div onClick={logOut}>
                                    <Link 
                                        to="/">
                                        Log Out
                                    </Link>
                                </div>
                            }   
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="noMasterImage">
                <div className="background-image" > </div>
            </section>

            <section>
                <div class="coupon">
                    <div class="container">
                        <h3>Company Logo</h3>
                    </div>
                    <img src="/w3images/hamburger.jpg" alt="Avatar"/>
                    <div class="container" style={{backgroundColor: `white`}}>
                        <h2><b>20% OFF YOUR PURCHASE</b></h2> 
                        <p>Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandi delicatissimi eam ea. In sed nullam laboramus appellantur, mei ei omnis dolorem mnesarchum.</p>
                    </div>
                    <div class="container">
                        <p>Use Promo Code: <span class="promo">BOH232</span></p>
                        <p class="expire">Expires: Jan 03, 2021</p>
                    </div>
                </div>

            </section>
        </div> 
    )
}

export default Shop;


