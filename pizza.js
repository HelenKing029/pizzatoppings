var toppings = ["pineapple", "pepper", "mushrooms", "olives", "pepperoni" ] 
var prices = [1, 2, 2, 1, 1]

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
document.getElementById('display').onclick = function () {
    screen.innerHTML = inputArray
};

// store into array 
// pass element through array
// get price

// list element and price
// display user selections with price

                        //display function taken from my mini finance report app
                        // function show() {
                        //   var content="<b>The Bills and Spending you entered:</b><br>";
                        //   for(var i = 0; i < billamount.length; i++) {
                        //      content +=billamount[i]+"<br>";
                        //   } 
                         
                        //   for(var i = 0; i < spending.length; i++) {
                        //     content +=spending[i]+"<br>";
                        //   }
                        //    document.getElementById('display').innerHTML = content;
                        // }

// place order button
  //popup window "thanks"

    // code example from http://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
function myFunction() {
    alert("Thanks for your Order!");
    console.log("submitting order")
}
