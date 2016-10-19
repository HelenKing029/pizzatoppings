//var toppings = ["pineapple", "pepper", "mushrooms", "olives", "pepperoni" ] 

var toppings = {
    pineapple: 1,
    pepper: 2,
    mushrooms: 2,
    olives: 1,
    pepperoni: 2
}
console.log("toppings", toppings)

var inputArray = [];
var ordertotal = 0;
var screen = document.getElementById('screen');

// submit button - prepare order

function myFunction() {
    console.log("Initial Order total", ordertotal);
    var inputArray = document.getElementById("choice").value;
    document.getElementById("userinput").innerHTML = inputArray + " at $" + toppings[inputArray];
	ordertotal = ordertotal + toppings[inputArray];

    document.getElementById("ordertotal").innerHTML = "for a total of $" + ordertotal;
	console.log("Toppings chosen" , inputArray)
	console.log("Updated order total", ordertotal);

	for (var i = 0; i < inputArray.length; i++){  
  		if (toppings[i] === toppings[inputArray]){
    		ordertotal = ordertotal + toppings[inputArray][i];
    		console.log("Order total", ordertotal)
 	}
  } 
}

<!-- Order Placed Button with Popup -->
// code example from p://www.w3schools.com/js/tryit.asp?filename=tryjs_alert

function orderPlaced() {
    alert("Thanks for your Order!");
    console.log("submitting order")
}