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
let content = document.getElementsByClassName("");
let contentExtra = document.getElementsByClassName("contEx");
let title = document.getElementsByClassName("title");
// let titleInactive = document.getElementsByClassName("box title-inactive").onmouseover = function() {mouseOver()};;


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


// let contone = document.getElementById('contone');
// document.getElementById('myButton').onclick = function() {
//   contone.classList.toggle('fade');
// }

function showMission() {
  let contone = document.getElementById('contone');
  contone.classList.add('fade');
  document.getElementById('contone').style.opacity='1';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.add('fade');
    elms[i].style.opacity='1';
  }

function showTeam() {
  let conttwo = document.getElementById('conttwo');
  conttwo.classList.add('fade2');
  document.getElementById('contone').style.opacity='0';
  document.getElementById('conttwo').style.opacity='1';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.add('fade');
    elms[i].style.opacity='100';
  }

function showContact() {
  let contthree = document.getElementById('contthree');
  contthree.classList.add('fade3');
  document.getElementById('contone').style.opacity='0';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('contthree').style.opacity='1';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.add('fade');
    elms[i].style.opacity='100';
}

function home() {
  document.getElementById('contone').style.opacity='0';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('logo-pages').style.display='none';
  document.getElementById('logo').style.display='block';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
  elms[i].classList.toggle('fade');
  elms[i].style.opacity='0';
  }

function menu() {
  document.getElementById('menu-mobile').style.display='block';
  }

function menuClose() {
  document.getElementById('menu-mobile').style.display='none';
  }
