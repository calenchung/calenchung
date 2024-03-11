let locationIndex = 0;

/*
let locations = [
  {lat:19.0230, lng:72.8230, zoom:15, name:"Mumbai"},
  {lat:29.827, lng:90.319, zoom:6, name:"Himalaya"},
  {lat: 29.9634, lng: -88.5235, zoom:10, name:"Mississipi River" },
{lat: 40.7680007, lng: -73.9784481, zoom:17,name:"Central Park"},
{lat: 40.7150767,lng: -74.002556, zoom:17, name:"Lower Manhattan"},
{lat: 22.8782, lng: 21.2134, zoom:10, name:"Sahara Desert"},
{lat: 39.2972725,lng: -106.721657, zoom:17, name:"Colorado"},
{lat: -44.949249,167.838663, zoom:17, name:"NZ" },
{lat: 39.2972725,lng: -106.721657, zoom:17, name:"Colorado Forest"},
{lat: 40.70752,lng: -73.95830, zoom:17, name:"Brooklyn"},
{lat: 39.636452,lng: -105.807352, zoom:15, name:"Colorado"}
];
*/

// These are only two locations: Boulder and NYC
let locations = [
  {lat: 40.7680007, lng: -73.9784481, zoom:12,name:"Central Park"},
    {lat:37.49819, lng: -122.16562, zoom:13, name:"Fremont"},
    // {lat:37.47989, lng: -122.06927, zoom:16, name:"Fremont"},
    // {lat:37.48974, lng: -122.05942, zoom:16, name:"Fremont"},
  // {lat:33.391893, lng:126.235252, zoom:14, name:"Jeju"},
  // {lat: 27.182375, lng:49.446080, zoom:13, name:"Himalaya"},
  // {lat: 27.943246, lng:42.091002, zoom:13, name:"Himalaya"},

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

let randomOffset = map(randomLoc["zoom"],17, 0, 0.001, 0.01 );
let loc = locations[0];
for (i = 0; i < tiles.length; i++) {
  // alternate between locations to get to checkerboard pattern
  if (i % 2 == 0) {
    loc = locations[0];
  }else{
    loc = locations[1];
  }
  let urlString = urlStartString + (loc["lng"]+(i*randomOffset)) + ","+ (loc["lat"]+(i*randomOffset)) + ","+ loc["zoom"] + urlEndString;
  // let urlString = urlStartString + (randomLoc["lng"]+(i*randomOffset)) + ","+ (randomLoc["lat"]+(i*randomOffset)) + ","+ randomLoc["zoom"] + urlEndString;
  tiles[i].style.backgroundImage = urlString;
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
  document.getElementById('contone').style.zIndex='100';
  document.getElementById('conttwo').style.zIndex='0';
  document.getElementById('contthree').style.zIndex='0';
  document.getElementById('contone').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.add('fade');
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.remove('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.remove('fade');
  }

function showTeam() {
  let conttwo = document.getElementById('conttwo');
  conttwo.classList.add('fade2');
  document.getElementById('contone').style.zIndex='0';
  document.getElementById('conttwo').style.zIndex='100';
  document.getElementById('contthree').style.zIndex='0';
  document.getElementById('conttwo').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.add('fade');
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.remove('fade');
  }

function showContact() {
  let contthree = document.getElementById('contthree');
  contthree.classList.add('fade3');
  document.getElementById('contone').style.zIndex='0';
  document.getElementById('conttwo').style.zIndex='0';
  document.getElementById('contthree').style.zIndex='100';
  document.getElementById('contthree').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.add('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.remove('fade');
}

function home() {
  document.getElementById('contone').style.opacity='0';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('logo-pages').style.display='none';
  document.getElementById('logo').style.display='block';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
  elms[i].classList.remove('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
  elms2[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
  elms3[i].classList.remove('fade');
  }

function homeMob() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
}

function contentM() {
  document.getElementById('contone').style.display='block';
  document.getElementById('contone').style.opacity='1';
  document.getElementById('pone').style.display='block';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
  }

function contentT() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='block';
  document.getElementById('conttwo').style.opacity='1';
  document.getElementById('ptwo').style.display='block';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
  }

function contentC() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='block';
  document.getElementById('contthree').style.opacity='1';
  document.getElementById('pthree').style.display='block';
  }


  function myFunction(mobile) {
    if (mobile.matches) { // If media query matches
      document.getElementById('logo').style.display='none';
      document.getElementById('logo-pages').style.display='none';
      document.getElementById('contone').style.display='none';
      document.getElementById('conttwo').style.display='none';
      document.getElementById('contthree').style.display='none';
      document.getElementById('pone').style.display='none';
      document.getElementById('ptwo').style.display='none';
      document.getElementById('pthree').style.display='none';
    } else {
      document.getElementById('logo').style.display='block';
      document.getElementById('logo').style.display='block';
      document.getElementById('contone').style.display='block';
      document.getElementById('conttwo').style.display='block';
      document.getElementById('contthree').style.display='block';
      document.getElementById('pone').style.display='block';
      document.getElementById('ptwo').style.display='block';
      document.getElementById('pthree').style.display='block';
    }
  }


  var mobile = window.matchMedia("(max-width: 750px)")
  myFunction(mobile)
  mobile.addListener(myFunction)
