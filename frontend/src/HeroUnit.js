import React, { useState } from 'react';


const HeroUnit = () => {

    const [state, setState] = useState(
        {
            label: 'Claim your $5'
        }
    )

    //variable reserved for the email field
    let emailEntry;

    const inputField = () => {
        //alert(emailEntry.value);
        if (emailEntry.value === ""){
            setState (
                {
                    label: 'email must be filled'
                }
            )
        }else{
            setState (
                {
                    label: 'GREAT'
                }
            )
        }
    }


    return(
        <section class="one">
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
                    >{state.label}</button>
            </div>
        </section>
    );

}

export default HeroUnit;



// import React from 'react';

// const HeroUnit = () => {
//     return(
//         <section class="one">
//             <div className="backgroundImage" style={{backgroundImage: `url(/img/happyshopper.jpg)`}}> </div>
//             <h1>Your rewards effortlessly accessible</h1>
//             <h3>Automatic coupons and cashback when you shop online</h3>
//             <div className="InputAddOn">
//                 <input className="InputAddOn-field" type="email" placeholder="Sign up today"/>
//                 <button className="InputAddOn-item" type="submit">Claim your $5</button>
//             </div>
//         </section>
//     );

// }

// export default HeroUnit;





