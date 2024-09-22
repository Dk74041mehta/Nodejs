const express = require('express');
const app = express();
const db= require('./db');
require('dotenv').config();


// const person= require('./Models/person');

// const MenuItem=require('./Models/menu')

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());  //  store object in req.body (bodyparsser->json data->object)  And have to only use

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('WELCOME TO MY HOTEL')
})


// post route to add person

 
// app.post('/person',  async(req, res)=> {

//   try{

    

//     const data = req.body;//assuming the request body contains the person data (body parser)

// //create a  new Person document using mongoose model

// const newPerson =new person(data);
 
// //****Save the new person to the DB

// const response = await newPerson.save();
// console.log('data saved');
// res.status(200).json(response);

//   }  

// catch(err)
// {
// console.log(err);
// res.status(500).json({error:'Internal server error'});
// }

// })


// POST route to add a new menu item

// app.post('/menu', async (req, res) => {

//   try {
//       const newMenuItem = new MenuItem(req.body);
//       const savedItem = await newMenuItem.save();
//       console.log("Data Saved");
//       res.status(200).json(savedItem);

//   } catch (err) {
//     console.log(err)
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });




// //**get method  to get the person**

// app.get('/person',async(req,res)=>{

//   try{

//     const data= await person.find();
//     console.log('data fetched');

//    res.status(200).json(data);

//   }
//   catch(err){

//     console.log(err);
//     res.status(500).json({error:'Internal server error'});

//   }

// })


//**get method  to get the MenuItem**

// app.get('/MenuItem',async(req,res)=>{

//   try{

//     const data= await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data);

//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal server error'});
//   }

// })


// #6//parametrized api or query params for person

// app.get('/person/:workType',async(req,res)=>{

//   try{
//     const workType=req.params.workType;  //extract the work type from the url parameter

//     //Validation
//     if(workType =='chef'|| workType =='manager'|| workType =='waiter'){

//       const response = await person.find({work:workType});
//       console.log("response fettched");

//       res.status(200).json(response);
//     }
//     else{
//           res.status(404).json({error:'invalid work type'});  }
//   }

//   catch(err){

//     console.log(err);
//     res.status(500).json({error:'Internal server error'});

//   }
// })

//import the router files

const personRoutes= require('./Routes/personRoutes');
const menuItemRoutes= require('./Routes/menuItemRoutes');


//use routers
app.use("/person",personRoutes);

app.use("/menu",menuItemRoutes);


app.listen(PORT,()=>{

  console.log("listening on port 3000");
})

// app.listen(3000,()=>{

//   console.log("listening on port 3000");
// })



