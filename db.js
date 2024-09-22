//Importing Mongoose
const mongoose = require('mongoose');
require('dotenv').config();


//define the mongoDB  connection URL 

//local server of database using mongodb

// const mongoURL=process.env.MONGODB_URL_Local //replace myapp with your database name

const mongoURL=process.env.MONGODB_URL // mongodb Atlas  database server online

//set  up mongodb connections
mongoose.connect(mongoURL)
    .then(() => console.log("Connected to MongoDB server"))
    .catch(err => console.error("MongoDB connection error:", err));

// mongoose.connect(mongoURL,{

//     // useNewUrlParser:true,          // Removed deprecated options

//     // useUnifiedTopology:true       //    // Removed deprecated options

// })


//Get the default connections
//Mongoose maintains a "default connection object" representing the Mongodb connections
const db=mongoose.connection;

//Define eventlistner  to database connections (keyword like-coonected,error and discounted are known as eventlistner)





db.on('disconnected', () => {
 console.log("MongoDB disconnected");
});



db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});



//export the database connections

module.exports = db;




/*
Deprecated options are features or settings in a software library or
 API that are no longer recommended for use and may be removed in future versions.
  When something is marked as deprecated, it usually means that there are better 
  alternatives available, and continuing to use those options may lead to issues 
  or incompatibility later on.

In your case:

useNewUrlParser: This option was used to enable the new URL string parser for MongoDB connections. In newer versions of the MongoDB Node.js driver, the new parser is the default, so this option is no longer necessary.

useUnifiedTopology: This option was introduced to enable the new unified topology layer in Mongoose. As of version 4.0.0 of the driver, this is now the default behavior, making the option redundant.

When options are deprecated, it’s a good idea to remove them from your code to avoid warnings and ensure compatibility with future releases. If you see a deprecation warning, it's generally a


*/