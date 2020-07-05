import React from 'react';

const HeroUnit = () => {
    return(
        <section class="one">
            <div className="backgroundImage" style={{backgroundImage: `url(/img/happyshopper.jpg)`}}> </div>
            <h1>Your rewards effortlessly accessible</h1>
            <h3>Automatic coupons and cashback when you shop online</h3>
            <div className="InputAddOn">
                <input className="InputAddOn-field" type="email" placeholder="Sign up today"/>
                <button className="InputAddOn-item" type="submit">Claim your $5</button>
            </div>
        </section>
    );

}

export default HeroUnit;

