// //1//Different objects

const { log } = require("console");

// // let product={
// //     name:"Sampoo",
// //     price: 99,
// //     instock:true


// // }

// // let product2={
// //     name:"Sampoo",
// //     price: 99,
// //     instock:true


// // }

// // let product3={
// //     name:"Sampoo",
// //     price: 99,
// //     instock:true


// // }



// // console.log(product);
// // console.log(product2);
// // console.log(product3);


// //2Multiple objects in an array

// let product=[{
//     name:"Sampoo",
//     price: 99,
//     instock:true


// },

// {
//     name:"Sampoo",
//     price: 99,
//     instock:true


// },

// {
//     name:"Sampoo",
//     price: 99,
//     instock:true


// }

// ]

// console.log(product);


//calling object using function- using for each



let products=[{
    name:"Sampoo",
    price: 99,
    instock:true


},

{
    name:"Sampoo",
    price: 99,
    instock:true


},

{
    name:"Sampoo",
    price: 99,
    instock:true


}

]


 const display=(products)=> {products.forEach(product=> {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price.toFixed(2)}`);  //(toFixed)value after price like 45.00
    console.log(`Instock: $${product.instock}`);
    console.log("-----------------");
    
    
})};


 display(products);