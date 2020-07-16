import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import ProfileListing from './ProfileListing.js';
import { Link } from 'react-router-dom';


const Profile = () => {

    //const [globalState, setGlobalState] = useContext(AppContext);

    const [globalState, setGlobalState] = useContext(AppContext);
    const [state, setState] = useState({ accounts: []})

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        );

        localStorage.clear();
    }

    useEffect(
        () => {
          // only fetch products if and when the user logs in
          if(globalState.loggedIn === true) {
            fetch('http://localhost:8080/accounts',{
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${[localStorage.getItem('jwt')]}`
            }
            
            })
            .then(
              (result)=>result.json()
            )
            .then (
              (json)=> {
                setState(
                  {
                    ...state,
                    accounts: json.accounts,
                  }
                )
              }
            );
          }
        },
        [ globalState.loggedIn ]
      )

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
                                <Link 
                                    to="/shop">
                                    Shop
                                </Link>
                            }   
                        </li>
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

                <h1>Your Profile</h1><br/><br/>

                <div>
                {
                    globalState.loggedIn === true &&
                    state.accounts.map(
                    (account)=>
                        <div >
                        <ProfileListing
                            avatar={account.avatar}
                            name={account.fullName}
                            password={account.password}
                        />
                        </div>
                        
                    )
                }
                </div>

            </section>
        </div> 
    )
}

export default Profile;
