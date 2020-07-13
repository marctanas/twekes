import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import { Redirect } from 'react-router-dom';

//import { Link } from 'react-router-dom';



const HeroUnit = () => {

    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            label: 'Claim your $5'
            
        }
    )

    //variable reserved for the email field
    let emailEntry;

    const inputField = () => {

        if (emailEntry.value === ""){
            setState (
                {
                    ...state,
                    label: state.label
                }
            )
        }else{

            setGlobalState(
                {
                    ...globalState,
                    email: emailEntry

                }
            )

            setState (
                {
                    ...state,
                    label: 'GREAT'            
                }
            )
        }
    }

    // If the user enters email, redirect them
    if(emailEntry === "") {
        return(<Redirect to="/accounts/signup"/>)
    }

    else{
        return(
            <section className="one">
                <div className="backgroundImage" style={{backgroundImage: `url(/img/happyshopper.jpg)`}}> </div>
                <h1>Your rewards effortlessly accessible</h1>
                <h3>Automatic coupons and cashback when you shop online</h3>
                <div className="InputAddOn">
                    <input type="text"
                        id="the-field"
                        className="InputAddOn-field"  
                        placeholder="Sign up today"
                        ref={ 
                            (elem) => emailEntry = elem 
                        }
                    />
                    <button type="button"
                        id="button-email"
                        className="InputAddOn-item"
                        onClick={inputField}
                        >{state.label}
                    </button>
                </div>
            </section>
        );
    }

}

export default HeroUnit;
