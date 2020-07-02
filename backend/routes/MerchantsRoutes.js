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

// Export the router
module.exports = router;