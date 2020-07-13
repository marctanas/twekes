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
        <header>
            <h2><Link 
                to="/">
                <img src="/img/twekeslogo.png" width="130" height="40" alt="twekes"/>
            </Link></h2>
            <nav>
                <ul>
                    <li className="loginLink">
                        {
                            globalState.loggedIn === true && 
                            <button onClick={logOut}>
                            <Link 
                                to="/">
                                Log Out
                            </Link>
                            </button>
                        }   
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Shop;


