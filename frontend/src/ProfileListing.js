import React from 'react';
import { Link } from 'react-router-dom';


const ProfileListing = (prop) => {


  const updateProfile = () => {
    alert("Your profile has been update");


  }

    return (
        <div className="container">
            <p>Avatar: <span>{prop.avatar}</span></p>
            <p>Name: <span>{prop.name}</span></p>
            <p>Password: <span>*********</span></p>
            <br/>
            <br/>
        </div>
    )
}

export default ProfileListing;