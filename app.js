// function foo(){
//     console.log("Ubaid");
// }
// foo();
// foo();
// foo();


// Passing them data

// function foo(name){
//     console.log(name);
// }
// foo("Ubaid Aslam");
// foo("Ubaid");


// function foo(a,b,c){
//         console.log(a,b,c);
//     }
//     foo("Ubaid","Aslam","Taha");

// ---X---

// var arr = [];

// function foo(value){
//     arr[arr.length] = value
// }
// foo ("Ubaid");
// foo ("Aslam");

// console.log(arr);


// function printName(name){
//     if(name){
//         document.write(name);
//     }
// }
// printName("Ubaid");

// function printName(name){
//         document.write(name);
// }
// printName(prompt("Enter your Name"));


// function abc(a,b){
//     return a * b;
// }
// console.log(abc(10,10));


// function abc(a,b){
//     return a + b;
// }
// var result = abc(10,10);
// console.log(result);


// function abc(a,b){
//     var output = a + b;
//     return output;
// }
// var result = abc(10,10);
// console.log(result);


// function myFunc(a,b){
//     return a * b;
// }
// console.log(myFunc(5,5) + 5);
// console.log(myFunc(5,5) + 10);
// console.log(myFunc(5,5) + 20);

// Que. Var ka function kiya h ?
// Ans. Var FUNCTION SCOPE h.Agar VAR function k andar bnaya gya ho toh wo function k andar hi accessable hoga.
// Agar apko function k bahir uski value chahiye toh return krna hoga.


// ---X---

// function callAlert(props, value) {
//   console.log(props.name, props.phone);

// for (let i = 0; i < value.length; i++) {
//   const element = value[i];
//   console.log(element);
// }
// }

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// function square(num) {
//   return num * num;
//   if (num > 5) {  // function can only return once, after return code will not run
//     console.log();
//   }
// }
// console.log(square(3));
// console.log(square(4));
// alert(square(5));

// var products = [
//   { name: "banana", price: 20, isDisCounted: true },
//   { name: "apple", price: 40, isDisCounted: true },
//   { name: "mango", price: 50, isDisCounted: false },
// ];
// function applyDiscount(price) {
//   var discount = (price * 50) / 100;
//   return discount;
// }

// for (var i = 0; i < products.length; i++) {
//   if (products[i].isDisCounted) {
//     document.writeln(
//       "<p>" +
//         products[i].name +
//         ": was <s>" +
//         products[i].price +
//         "</s>" +
//         "now" +
//         applyDiscount(products[i].price),
//       "</p>"
//     );
//   } else {
//     document.writeln(
//       "<p>" + products[i].name + ": " + products[i].price,
//       "</p> "
//     );
//   }
// }


// ---X---

function xyz(){
  var a = 5;

  function abc(){
    console.log(a);
  }
  abc();
}
xyz();