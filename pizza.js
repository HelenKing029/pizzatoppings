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
    //var i; 

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


//MAPPING FUNCTION //

var locations = [
    [
        "Uptown",
        48.455813,
         -123.375386
    ],
    [
            "Downtown",
        48.424961, 
        -123.365695
    ],
    [
        "Royal Oak",
        48.492316, 
        -123.388491
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(48.460224,  -123.361599),     
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker = [];
    var i;

    for (i = 0; i < locations.length; i++) { 
    console.log(i);
    console.log("marker: ",marker);
      marker[i] = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });


      google.maps.event.addListener(marker[i], 'click', function(e) {
          map.setZoom(17);
          console.log(e);
          map.setCenter(e.latLng);
        });

    }



