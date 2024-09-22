const newPerson =new person(data);
 
/*
// // newPerson.name = data.name;

// // newPerson.age= data.age;
// // newPerson.mobile = data.mobile;
// // newPerson.email = data.email;
// // newPerson.address = data.address;

......complex way to put data...just pass data for simple and effective way  like  we did here
const newPerson =new person(data);

 */


/*
**Callback function problem****

// //save the new person to the DB

// newPerson.save((error, savedPerson) => {
//   if(error){
//     console.log('error saving person:',error);
//     res.status(500).json({error:'internal server error'})
//   }
//   else{
//     console.log('data saved successfully');
//     res.status(500).json(savedPerson);
//   }})


->new and best is used in server.js
*/