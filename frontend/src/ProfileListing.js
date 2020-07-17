import React, {useState} from 'react';

const ProfileListing = (prop) => {

  let avatarUpdate;
  let nameUpdate;
  let passwordUpdate;

  const updateProfile = () => {
    //alert("Your profile has been update");

  //   const [state, setState] = useState(
  //     {
  //         updated: false,
  //     }
  // );

    fetch('http://localhost:8080/accounts/update', 
          {
            method: 'POST',
            body: JSON.stringify(
                {
                  avatar: avatarUpdate.value, 
                  fullName: nameUpdate.value, 
                  password: passwordUpdate.value
                }
            ),
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${[localStorage.getItem('jwt')]}`
            },

        }
        )
        .then(            
          (result) => result.json(),
        )
        .then(
          (json) => console.log(json),

    )
  }  

  

  return (
      <div className="container">

        <form method="get" onSubmit={updateProfile}>
          <label htmlFor="fname" placeholder={prop.avatar}>Avatar</label>
          <input type="text" placeholder={prop.avatar} ref={(elem) => avatarUpdate = elem}/>
          <label htmlFor="fname" placeholder={prop.name}>Full name:</label>
          <input type="text" placeholder={prop.name} ref={(elem) => nameUpdate = elem}/>
          <label htmlFor="fname" >Password:</label>
          <input type="text" placeholder="new password" ref={(elem) => passwordUpdate = elem}/>
          <button>Update</button>
        </form>

      </div>
    )
}

export default ProfileListing;