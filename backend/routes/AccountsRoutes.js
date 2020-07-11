// Import express into the file
const express = require('express');
const bcrypt = require('bcrypt');

//invoke the router()
const router = express.Router();

const jwt = require('jsonwebtoken');
const secret = "s3cr3t100";

// import the AccountsModel
const AccountsModel = require('../models/AccountsModel');


// /register
// A POST route for saving data into the 'users' collection
router.post(
    '/register',    //http://localhost:8080/accounts/register
    (req, res) => {

        // capture the user data coming from the client (e.g browser, postman)
        const userData = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        };


        // Step 1) Generate a salt
        bcrypt.genSalt(
            (err, salt) => {

                // Step 2) Generate a hash encrypted password
                bcrypt.hash(
                    userData.password,  // first ingredient
                    salt,  //second ingredient
                    (err, hashedPassword) => {

                        // Save the data to database (users collection)
                        const newAccountModel = new AccountsModel(userData);
                        
                        // Step 3) Replace the original password with hash encrypted password
                        newAccountModel.password = hashedPassword;

                        // Step 4) Save user data to database (with encryption password)
                        newAccountModel.save(
                            (err, dbResult) => {
                
                                // if something goes wrong, send error
                                if(err){
                                    res.json({message: err})
                                }
                                
                                // Otherwise, send success message
                                else{
                                    res.json({message: 'Your POST Register User has been received and saved'});
                                }
                            }
                        );
                    }
                )
            }
        );


        console.log(
            'From the user', userData
        );

    }
    
);


// /login
router.post(
    '/login',
    (req,res) => {

        // npm packages to install: passport, passport-jwt, jsonwebtoken 
        
        // Step 1. Capture userData (email & password)
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        // Step 2a. In database, Find account that matches email
        AccountsModel.findOne(
            {email: userData.email},
            (err, document) => {
                

                //Step 2b. If email does not match, reject the login request
                if(!document){
                    res.json({message: "Please check email or password"})
                }

                // Step 3. If there is matching email, examine the document( the userData - password)
                else {

                    // Step 4. Compare the encrypted password in database with incoming password
                    bcrypt.compare(userData.password, document.password)
                    .then(
                        (isMatch) => {

                            // Step 5a. If the password matches, generate web token (JWT - json web token)
                            if(isMatch){
                                // Step 6. Send the JWT to the client (postman, browser)
                                const payload = {
                                    id: document.id,
                                    email: document.email
                                };

                                jwt.sign(
                                    payload,
                                    secret,
                                    (err, jsonwebtoken) => {
                                        res.json(
                                            {
                                                message: 'Login successful',
                                                jsonwebtoken: jsonwebtoken
                                            }
                                        )
                                    }
                                )
                            }

                            //Step 5b. If password does not match, reject login request
                            else {
                                res.json({message:"Please check email or password"})
                            }
                        }
                    )
                }
            }
        )
        
    }
);

// Export the router
module.exports = router;