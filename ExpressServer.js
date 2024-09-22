const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Server is Started')
})


app.get('/paalak', function (req, res) {
  let customized_palak={
      pakoda:"paalak pakoda",
      saag:"paalak saag",
      panner:"paalak panner",
      kadhai:"kadahi paneer"

  }

  res.send(customized_palak);
})


app.post('/person', function (req, res) {
  res.send('I saved the data')
})

                                                                                                                                                                                                                                                                                                      
app.get('/batman', function (req, res) {
     res.send('i am batman heheehehehehehhehheehehehheehehhehheehh ')
  })

  
app.get('/joker', function (req, res) {
    res.send('WHYYYYYYYYYYYYY SOOOOOOOOOOOOOOOOO SERIOUSSSSSSSSSS!!!!!!!!!!!??????????')
  })

   
app.get('/marvel', (req, res)=> {

const heros={

  spidy:"spiderman",
   iron:"ironman",
  hulk:"hulk",

}
  res.send(heros)
})


app.get('/intro', (req, res)=> {

  const self={
  
    Name:"Dilip Kumar",
     Age :"20",
    sir_name:"Mehta",
  
  }
    res.send(self)
  })
  
  
app.post('/king', function (req, res) {
  console.log("saved");
  
  })
  

app.listen(3000,()=>{

  console.log("server is listening on port 3000");
  
});          

/*
//Port Configuration and Server Initialization"
1)Hardcorded port
app.listen(3000,()=>{

  console.log("listening on port 3000");
})

2)Dynamic hosting

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

*/