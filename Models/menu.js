const mongoose = require('mongoose');
const { type } = require('os');
const { types } = require('util');

// Define the menu item schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default:"Kichdi"
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    category: {
        type: String,
        required: true,
        enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage','Light food'], // Adjust categories as needed
    default:'Light Food'
    },


    available: {
        type: Boolean,
        default: true, // Indicates if the item is available
    },

    Drink:{
type:String,
           },

           taste: {
            type: String, // Possible values: "Sweet", "Savory", "Spicy", "Sour", etc.
            enum: ['Sweet', 'Spicy', 'Sour'], // Adjust as needed
            required:true,
        },
        is_Drink:{
type:Boolean,
default:false,

        },

        integration: {
            type: [String],
            default:[],
        },
        Num_sales:{
            type:Number,
            default:0,
        }
});


// Create the MenuItem model
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Export the model
module.exports = MenuItem;
