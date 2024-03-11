let locationIndex = 0;

let locations = [
  {lat:19.0230, lng:72.8230, zoom:15, name:"Mumbai"},
  {lat:29.827, lng:90.319, zoom:6, name:"Himalaya"},
  {lat: 29.9634, lng: -88.5235, zoom:10, name:"Mississipi River" },
{lat: 40.7680007, lng: -73.9784481, zoom:17,name:"Central Park"},
{lat: 40.7150767,lng: -74.002556, zoom:17, name:"Lower Manhattan"},
{lat: 22.8782, lng: 21.2134, zoom:10, name:"Sahara Desert"},
{lat: 39.2972725,lng: -106.721657, zoom:17, name:"Colorado"},
{lat: 37.3965581, lng: 126.6364439, zoom:17, name:"?" },
];

locations = [
  {lat: 40.7150767,lng: -74.002556, zoom:17, name:"Lower Manhattan"},
  {lat: 39.2972725,lng: -106.721657, zoom:17, name:"Colorado"}
]

function randomLocation(){
  // var locationIndex = Math.floor(Math.random()*locations.length);
  let loc = locations[Math.floor(Math.random()*locations.length)];
  // loc = locations[locationIndex];
  return loc;
}

let tiles = document.getElementById("grid").children;

let randomLoc = randomLocation();

let i;
let urlStartString = "url('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/";
let urlEndString = ",0,0/1280x700?access_token=pk.eyJ1IjoicmVhZHlsZXRzZ28iLCJhIjoiY2s4ejBoZmtyMDBlbDNsbXh1ZzliMGo5YyJ9.hryfSaItVhTqHQ3V3TxbEg')";

// let randomOffset = 0;
let randomOffset = map(randomLoc["zoom"],17, 0, 0.001, 0.01 );
// console.log(urlString);
let loc = locations[0];
for (i = 0; i < tiles.length; i++) {
  if (i % 2 == 0) {
    loc = locations[0];
  }else{
    loc = locations[1];
  }

    // let urlString = urlStartString + (randomLoc["lng"]+(i*randomOffset)) + ","+ (randomLoc["lat"]+(i*randomOffset)) + ","+ i + urlEndString;
  let urlString = urlStartString + (loc["lng"]+(i*randomOffset)) + ","+ (loc["lat"]+(i*randomOffset)) + ","+ loc["zoom"] + urlEndString;

  // let urlString = urlStartString + (randomLoc["lng"]+(i*randomOffset)) + ","+ (randomLoc["lat"]+(i*randomOffset)) + ","+ i + urlEndString;

  // let urlString = urlStartString + (randomLoc["lng"]+(i*randomOffset)) + ","+ (randomLoc["lat"]+(i*randomOffset)) + ","+ randomLoc["zoom"] + urlEndString;
  // let urlString = urlStartString + randomLoc["lng"] + ","+ randomLoc["lat"] + urlEndString;
  tiles[i].style.backgroundImage = urlString;
  // tiles[i].style.backgroundPosition = (Math.random()*1280) +"px " + (Math.random()*700) +"px"  ;
}


/* ----------------------------------------------------------------------------------------
Helper functions
------------------------------------------------------------------------------------------*/

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function VwToPx(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function EmToPx(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (emSize * input);
}

function PxToEm(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (Math.floor(input / emSize));
}

/*
let mouseX = 0;
let mouseY = 0;
let map_img = document.getElementById("map_img");

// Add the event listeners for mousedown, mousemove, and mouseup

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    map_img.style.left = mouseX + "px";
    map_img.style.top = mouseY + "px";
    // console.log(mouseX);
});
*/
