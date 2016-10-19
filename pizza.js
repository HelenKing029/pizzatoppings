var toppings = {
    pineapple: 1,
    pepper: 1,
    mushroom: 2, 
    olives: 1,
    pepperoni: 2, 
    ham: 2
}
// idea from http://www.codereadability.com/replacing-if-statements-with-object-lookups/
var price = toppings[userselected];

// from http://jsfiddle.net/y9wL27y0/
//the user selects their topping
var userselected = [];
console.log(userselected)
// store toppings into array 
var userorder = [];
userorder.push(userselected);
console.log(userorder)
// pass element through array

// price starts at 0
var totalprice = 0;
 function calcTotal (inputbox){
 var total = [];
  //add the variables
  return a + b; 
}

//The program should take the toppings and 

//present the toppings with a total price. 
  // store users selections in an array
    // sum the array
      var sum = [userselected].reduce(add, 0);

      function add(a, b) {
          return a + b;
      }
      console.log(sum); 

var input = document.getElementById('inputbox');
var screen = document.getElementById('screen');

//display the price and toppings selected

document.getElementById('prepare').onclick = function () {
    userselected.push(input.value);
    screen.innerHTML = input.value;
    //statement to be displayed on click
    document.getElementById("statement").innerHTML = "You have selected:" + userorder + " at a cost of $" + sum
};

// place order button
  //popup window "thanks"

    // code example from http://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
function myFunction() {
    alert("Thanks for your Order!");
    console.log("submitting order")
}
