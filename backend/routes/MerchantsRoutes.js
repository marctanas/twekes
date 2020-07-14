// Import express into the file
const express = require('express');
// invoke the router()
const router = express.Router();
// import the ProductsModel
const MerchantsModel = require('../models/MerchantsModel');


// A POST route for saving data into the 'products' collection
router.post(
    '/',   // http://localhost:8080/merchants
    (req, res) => {

        // read the merchant data
        const merchantData = {
            brandName: req.body.brandName,
            discountCode: req.body.discountCode,
            activateBrand: req.body.activateBrand
        };

        console.log(
            'From the merchant', merchantData
        );

        // Save the data to database (merchant collection)
        const newMerchantModel = new MerchantsModel(merchantData);
        newMerchantModel.save(
            (err, dbResult) => {

                // if something goes wrong, send error
                if(err){
                    res.send(err)
                }
                // Otherwise, send success message
                else{
                    res.send('Your POST Merchants has been received.');
                }
            }
        );
    }
    
);

// A GET route for fetching data from the 'merchants' collection
router.get(
    '/',
    (req, res)=>{

        // Fetch all the documetns using .find()
        MerchantsModel.find()

        //Once the results are ready, use .json() to send the results
        .then(
            (results) => {
                res.json(results)
            }
        )
        .catch(
            (e) => {
                console.log('error eccured', e)
            }
        )

    }
);


// Export the router
module.exports = router;