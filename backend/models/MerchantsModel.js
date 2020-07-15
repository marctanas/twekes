// Import mongoose
const mongoose = require('mongoose');

// creating the Schema for what kind of collection will be saved in the DB
// class contructor
const MerchantsSchema = new mongoose.Schema(
    {
        loggedId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        brandName: {
            type: String,
            required: true
        },
        discountCode: {
            type: Array,
            required: true
        },
        activateBrand: {
            type: String,
            required: true
        }
    }
);

//model out of the schema
const MerchantsModel = mongoose.model('merchants', MerchantsSchema);

//to export to MongoDB
module.exports = MerchantsModel;