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
            <div className="shop-user-body">
                <div className="shop-user-sidebar-1 nav-sidebar">
                    <h2><Link 
                        to="/shop">
                        <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
                    </Link></h2>
                    
                    <div className="loginLink">
                        {
                            globalState.loggedIn === true && 
                            <div className="btn" style={{color: `white`}} onClick={logOut}>
                            <Link 
                                to="/">
                                Log Out
                            </Link>
                            </div>
                        }   
                    </div>
                </div>

                <section className="shop-user-content">
                    <p>Search bar and list of shops with activate offer</p>
                </section>

            </div>

        </div> 
    )
}

export default Shop;


