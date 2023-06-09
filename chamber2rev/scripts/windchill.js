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