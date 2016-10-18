var toppings = ["pineapple", "pepper", "mushrooms", "olives", "pepperoni" ] 
var prices = [1, 2, 2, 1, 2]

// from http://jsfiddle.net/y9wL27y0/
var inputArray = [];
var input = document.getElementById('inputbox');
var screen = document.getElementById('screen');
//input box to enter toppings separated by comma


// submit button - prepare order

document.getElementById('prepare').onclick = function () {
    inputArray.push(input.value);
    screen.innerHTML = input.value;
};

// store into array 
// pass element through array
// get price

// list element and price
// display user selections with price
function orderform() {
    if (inputArray == "pineapple"){
      console.log("pineapple")
      total =+ 1; 
    };
    if (inputArray == "pepper"){
      total =+ 2; 
    };
    if 

}

                     
var total = 0; 

for (var i = 0; i < meow.length; i++) {
    for (var j = 0; j < toppings.length; j++) {
        if (meow[i] == toppings[j]) 
            total = total + price[j];
    }
}
// place order button
  //popup window "thanks"

    // code example from http://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
function myFunction() {
    alert("Thanks for your Order!");
    console.log("submitting order")
}
