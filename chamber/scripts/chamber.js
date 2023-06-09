const currentDate = Date();
document.querySelector("#lastModified").innerHTML = currentDate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});
// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.textContent = fulldate;

// ........wind-chill js file.....................
const celcTemp = document.getElementById("temprature").innerHTML;
const speedinKilometers = document.getElementById("wind-speed").innerHTML;
// celcius to fahrenheints...............................
const fahrTemp = (celcTemp * 1.8) +32;
const speedmiles = speedinKilometers / 1.609;
// calculate wind chill....................
let windchill;
if (fahrTemp <= 50 && speedmiles > 3){
    windchill = 35.74 + (0.6215 * fahrTemp * Math.pow(speedmiles, 0.16));
    console.log(windchill);
    windchill = ((windchill - 32) * (5/9)).toFixed(0) + " °C ";
    console.log(windchill);
} else {
    windchill = "N/A";
}
// fahrenheits to celcius
document.getElementById("windchill").innerHTML = windchill;

// chamber form js.






