const express =require('express');
const router = express.Router();
const MenuItem=require('../Models/menu')



// POST route to add a new menu item

router.post('/', async (req, res) => {

    try {
        const newMenuItem = new MenuItem(req.body);
        const savedItem = await newMenuItem.save();
        console.log("Data Saved");
        res.status(200).json(savedItem);
  
    } catch (err) {
      console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
  });


  
//**get method to get the MenuItem**

router.get('/',async(req,res)=>{

    try{
  
      const data= await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
  
  })
  
  

// #6//parametrized api or query params for person

router.get('/:Taste',async(req,res)=>{

    try{
      const Taste=req.params.Taste;  //extract the work type from the url parameter
  
      //Validation
      if(Taste =='Spicy'||Taste =='Sour' || Taste =='Sweet'){
  
        const response = await MenuItem.find({taste:Taste});
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
  

  
  module.exports=router;