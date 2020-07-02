// Importing express inside your server
const express = require ('express');

// Import mongoose insider server
const mongoose = require('mongoose');

//Import body-parser
const bodyParser = require('body-parser');

// Import passport
const passport = require('passport');
// Import the strategies & way to extract the jsonwebtoken
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// The same secret in routes/AccountsRoutes will be needed to read the jsonwebtoken
const secret = "s3cr3t100";

// We need the AccountsModel to find the user in the database
const AccountsModel = require('./backend/models/AccountsModel');

// Options for passport-jwt
const passportJwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

// This function is what will read the contents (payload) of the jsonwebtoken
const passportJwt = (passport) => {
    passport.use(
        new JwtStrategy(
            passportJwtOptions,
            (jwtPayload, done) => {

                // Extract and find the user by their id (contained jwt)
                AccountsModel.findOne({ _id: jwtPayload.id})
                .then(
                    // If the document was found
                    (document) => {
                        return done(null, document)
                    }
                )
                .catch(
                    // If something went wrong with database search
                    (err) => {
                        return done(null, null);
                    }
                )
            }
        )
    )
};

// Import routes
const MerchantsRoutes = require('./backend/routes/MerchantsRoutes');
const AccountsRoutes = require('./backend/routes/AccountsRoutes');

// Create the server object
const server = express();

// Configure express to use body-parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(passport.initialize());

// Invoke passportJwt and pass the passport package as argument
passportJwt(passport);


//Enter database connection URL from mongoDB
const dbURL = "mongodb+srv://marc:z9has6Pp@cluster0-kmonh.mongodb.net/twekes?retryWrites=true&w=majority";

mongoose.connect(
    dbURL,
    {
        'useNewUrlParser': true,
        'useUnifiedTopology': true
    }

).then(
    ()=>{
        console.log('You are connected to MongoDB');
    }
).catch(
    (e)=>{
        console.log('catch', e);
    }
);

// link our MerchantsRoutes
server.use(
    '/merchants', // http://localhost:8080/merchants
    passport.authenticate('jwt', {session:false}),   //authenticate user in order to proceed to merchants - use passport-jwt
    MerchantsRoutes
);

// link our AccountsRoutes
server.use(
    '/accounts', // http://localhost:8080/accounts
    AccountsRoutes
);

// Create a route for the landing page
server.get(
    '/',
    (req, res)=>{
        res.send(
            "<h1> Welcome to somewebsite.com</h1>" +
            "<a href='/about'>About</a>" + " " +
            "<a href='/contact'>Contact</a>" + " " +
            "<a href='/products'>Products</a>"
        );
    }
);

// Create a route for the 404 page
server.get(
    '*',
    (req, res)=>{
        res.send(
            "<h1> 404! Page not Found</h1>"
            );
    }
);

// Connect to port (range 3000 - 9999)
// http://127.0.0.1:8080 (aka http://localhost:8080)  this is on local machine
server.listen( 
    8080, ()=>{
        console.log('You are connected to Localhost http://127.0.0.1:8080');
    }
)