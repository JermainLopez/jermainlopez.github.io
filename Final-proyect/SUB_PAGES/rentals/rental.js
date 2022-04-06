const mytownship = '../../DATA/myJSon.json';
//const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3531673&units=imperial&appid=a22fa08f55a59807a4b7b1e71c3230eb";

var rentalList;
var maxPersonsList;
var reservationObject;
var walkInObject;
var rental;
var typeOfReservation;
var selectTime;
var price;
    
fetch(mytownship)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        rentalList= jsonObject["rentalType"];
        maxPersonsList= jsonObject["maxPersons"];
        reservationObject= jsonObject["reservation"];
        walkInObject= jsonObject["walkIn"];

        

});




function selectResponse() {
    rental = document.querySelector('#rental').value;  
    //document.querySelector('.fiveday').innerText = rental;
}
function selectResponse2() {
    typeOfReservation =  document.querySelector('.Reservation1').value;
}
function selectResponse3() {
    typeOfReservation =  document.querySelector('.Reservation2').value; 
}
function selectResponse4() {
    selectTime = document.querySelector('#select-time').value;
}
function main(){
    var numberOfPeople = document.querySelector('#numero').value; 
    var idx = rentalList.indexOf(rental);
   //document.querySelector('.flex1').innerText = idx;
   if (rental == undefined){
    document.querySelector('.fiveday').innerText = "Please complete the information above"; 

   }else{
    document.querySelector('.fiveday').innerText = rental; 
    if (typeOfReservation == "reservation"){
        document.querySelector('.flex2').innerText = "Reservation"; 
        if (selectTime == "halfDay"){
            document.querySelector('.flex3').innerText = "Half Day"; 
            document.querySelector('.flex4').innerText ="Cost per vehicle:  " + "$" + reservationObject.halfDay[idx]; 
            price = reservationObject.halfDay[idx];
        }else{
            document.querySelector('.flex3').innerText = "Full Day"; 
            document.querySelector('.flex4').innerText ="Cost per vehicle:  " + "$" +  reservationObject.fullDay[idx];
            price = reservationObject.fullDay[idx];
        }
    }else{
        document.querySelector('.flex2').innerText = "Walk-In"; 
        if (selectTime == "halfDay"){
            document.querySelector('.flex3').innerText = "Half Day"; 
            document.querySelector('.flex4').innerText ="Cost per vehicle:  " + "$" +  walkInObject.halfDay[idx]; 
            price = walkInObject.halfDay[idx]; 
        }else{
            document.querySelector('.flex3').innerText = "Full Day"; 
            document.querySelector('.flex4').innerText ="Cost per vehicle:  " + "$" +  walkInObject.fullDay[idx];
            price = walkInObject.fullDay[idx];
        }

    }
    var numberOfEquipage = numberOfPeople / maxPersonsList[idx];
    var secuense = numberOfEquipage - parseInt(numberOfEquipage);
    if (secuense > 0){
        secuense = parseInt(numberOfEquipage) + 1;
    }else{
        secuense = numberOfEquipage;
    }

    document.querySelector('.flex5').innerText ="Number of people: " + numberOfPeople; 
    document.querySelector('.flex6').innerText ="Capacity per vehicle: " + maxPersonsList[idx]; 
    document.querySelector('.flex7').innerText = "You need: " + secuense + " " + rental; 
    document.querySelector('.flex8').innerText = "Total Price: $  " + (secuense * price) ; 



   }
    

}