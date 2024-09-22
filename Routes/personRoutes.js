const express =require('express');
const router = express.Router();
const person= require('../Models/person');
const { error } = require('console');

// Define routes for /person
router.post('/',  async(req, res)=> {

    try{
  
      const data = req.body;//assuming the request body contains the person data (body parser)
  
  //create a  new Person document using mongoose model
  
  const newPerson =new person(data);
   
  //****Save the new person to the DB
  
  const response = await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);
  
    }  
  
  catch(err)
  {
  console.log(err);
  res.status(500).json({error:'Internal server error'});
  }
  
  })

  
//**get method  to get the person**

router.get('/',async(req,res)=>{

    try{
  
      const data= await person.find();
      console.log('data fetched');
  
     res.status(200).json(data);
  
    }
    catch(err){
  
      console.log(err);
      res.status(500).json({error:'Internal server error'});
  
    }
  
  })


  

// #6//parametrized api or query params for person

router.get('/:workType',async(req,res)=>{

    try{
      const workType=req.params.workType;  //extract the work type from the url parameter
  
      //Validation
      if(workType =='chef'|| workType =='manager'|| workType =='waiter'){
  
        const response = await person.find({work:workType});
        console.log("response fettched");
  
        res.status(200).json(response);
      }
      else{
            res.status(404).json({error:'invalid work type'});  }
    }
  
    catch(err){
  
      console.log(err);
      res.status(500).json({error:'Internal server error'});
  
    }
  })
  
//Update Routing

  router.put('/:id', async (req, res) => {
    try {
    const personId = req.params.id; // Extract the person's ID from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    // Assuming you have a Person model
    const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
    new: true, // Return the updated document
    runValidators: true, // Run Mongoose validation

  });

  if (!response) {
  return res.status(404).json({ error: 'Person not found'});
  }
  console.log('data Updated');
  res.status(200).json({response});
  
  }catch(error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
  }
})



//**Delete Routing

router.delete('/:id', async (req, res) => {
  try {
  const personId = req.params.id; // Extract the person's ID from the URL parameter

  // Assuming you have a Person model
  const deletedPerson = await person.findByIdAndDelete(personId);
  if (!deletedPerson) {
  return res.status(404).json({ error: 'Person not found' });
  } 
  
  console.log('data delete');

  // Send a success message as a JSON response
  res.status(200).json(deletedPerson);  //here we don,t need to write else part
  } 
  catch (error) {
  console.error('Error deleting person:', error);
  res.status(500).json({ error: 'Internal server error' });
  }});  

module.exports = router;