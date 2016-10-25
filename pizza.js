var toppings = {
    pineapple: 1,
    peppers: 2,
    mushrooms: 2,
    olives: 1,
    pepperoni: 2
}
console.log("toppings", toppings)



function myFunction() {

    var inputArray = {};
   
    var ordertotal = 0;
    var screen = document.getElementById('screen');

// submit button - prepare order

    var total =0; 
    var i; 

    console.log("Initial Order total", ordertotal);
    var inputArray = document.getElementById("choice").value;
    document.getElementById("userinput").innerHTML = inputArray;   //+ " at $" + toppings[inputArray]
	//ordertotal = ordertotal + toppings[customerToppings];
    console.log(ordertotal);
    
    inputArray = document.getElementById("choice").value; 
        var customerToppings = inputArray.split(', '); //testing split function
            console.log(customerToppings)
            console.log(ordertotal);

	for (var i = 0; i < customerToppings.length; i++){  
        var currentTopping = customerToppings[i];
        var price = toppings[currentTopping];
        ordertotal += price;
        console.log("price: " + price)
        console.log(ordertotal);
  } 
    document.getElementById("ordertotal").innerHTML = "for a total of $" + ordertotal;
    console.log(ordertotal);
    console.log("Toppings chosen" , inputArray)
    console.log("Updated order total", ordertotal);
}

<!-- Order Placed Button with Popup -->
// code example from p://www.w3schools.com/js/tryit.asp?filename=tryjs_alert

function orderPlaced() {
    alert("Thanks for your Order!");
    console.log("submitting order")
}




