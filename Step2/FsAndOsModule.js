//Code Node js

//Os and fs are package or library with some in-built functions of node js

// 1)  Importing fs and os module package

var fs=require('fs')

 var os=require('os');

// console.log(os);

// // In-Built functions of os -> os used to get details of the system


 var user = os.userInfo(); 
//  console.log(user);



/* let userInfo = os.userInfo();

 console.log('User Information:');
 console.log('Username:', userInfo.username);
console.log('Home Directory:', userInfo.homedir);
console.log('UID:', userInfo.uid);
console.log('GID:', userInfo.gid);
console.log('Shell:', userInfo.shell); */


//****fs inbuilt function**** for creating file and sending message....

/*The fs (File System) module in Node.js is used to interact 
with the file system on your machine.
 It provides methods to read, write, and manipulate files and directories. 
 This module is part of Node.js’s core library, so you don’t need to install it separately*/

fs.appendFile('fs.text',  'Hii '+  user.username +'  '+user.homedir  +'\n',()=>{

    console.log("Hey I'm Fs!!!")
})


//***** Import and Export* ****

// const exporting=require('./export.js' );
// var _= require('lodash');

// console.log("kumar");


// var age=exporting.age;
// console.log(age);

// var result=exporting.add(5,5);

// let array=['dilip','falcon','papa','Maa',5,7,5,3,3,4]
// let filter=_.uniq(array);
// console.log(filter);
// console.log(_.isString(34));
