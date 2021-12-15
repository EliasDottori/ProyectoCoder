var dorne1 = document.getElementById("dorne1");
var dorne = document.getElementById("dorne");
dorne1.addEventListener("mouseover", () => {
  dorne.className = "dorne";
  dorneP.className = "dorne";
  dorneT.className = "dorne";
}, false)
dorne1.addEventListener("mouseout", () => {
  dorne.className = "dorne0";
  dorneP.className = "dorne0";
  dorneT.className = "dorne0";
}, false)

var tyrell1 = document.getElementById("tyrell1");
var tyrell = document.getElementById("tyrell");
tyrell1.addEventListener("mouseover", () => {
  tyrell.className = "tyrell";
  tyrellP.className = "tyrell";
  tyrellT.className = "tyrell";
}, false)
tyrell1.addEventListener("mouseout", () => {
  tyrell.className = "tyrell0";
  tyrellP.className = "tyrell0";
  tyrellT.className = "tyrell0";
}, false)

var baratheon1 = document.getElementById("baratheon1");
var baratheon = document.getElementById("baratheon");
baratheon1.addEventListener("mouseover", () => {
  baratheon.className = "baratheon";
  baratheonP.className = "baratheon";
  baratheonT.className = "baratheon";
}, false)
baratheon1.addEventListener("mouseout", () => {
  baratheon.className = "baratheon0";
  baratheonP.className = "baratheon0";
  baratheonT.className = "baratheon0";
}, false)

var kinglanding1 = document.getElementById("kinglanding1");
var kinglanding = document.getElementById("kinglanding");
kinglanding1.addEventListener("mouseover", () => {
  kinglanding.className = "kinglanding";
  kinglandingP.className = "kinglanding";
  kinglandingT.className = "kinglanding";
}, false)
kinglanding1.addEventListener("mouseout", () => {
  kinglanding.className = "kinglanding0";
  kinglandingP.className = "kinglanding0";
  kinglandingT.className = "kinglanding0";
}, false)

var lannister1 = document.getElementById("lannister1");
var lannister = document.getElementById("lannister");
lannister1.addEventListener("mouseover", () => {
  lannister.className = "lannister";
  lannisterP.className = "lannister";
  lannisterT.className = "lannister";
}, false)
lannister1.addEventListener("mouseout", () => {
  lannister.className = "lannister0";
  lannisterP.className = "lannister0";
  lannisterT.className = "lannister0";
}, false)

var tully1 = document.getElementById("tully1");
var tully = document.getElementById("tully");
tully1.addEventListener("mouseover", () => {
  tully.className = "tully";
  tullyP.className = "tully";
  tullyT.className = "tully";
}, false)
tully1.addEventListener("mouseout", () => {
  tully.className = "tully0";
  tullyP.className = "tully0";
  tullyT.className = "tully0";
}, false)

var arryn1 = document.getElementById("arryn1");
var arryn = document.getElementById("arryn");
arryn1.addEventListener("mouseover", () => {
  arryn.className = "arryn";
  arrynP.className = "arryn";
  arrynT.className = "arryn";
}, false)
arryn1.addEventListener("mouseout", () => {
  arryn.className = "arryn0";
  arrynP.className = "arryn0";
  arrynT.className = "arryn0";
}, false)

var stark1 = document.getElementById("stark1");
var stark = document.getElementById("stark");
stark1.addEventListener("mouseover", () => {
  stark.className = "stark";
  starkP.className = "stark";
  starkT.className = "stark";
}, false)
stark1.addEventListener("mouseout", () => {
  stark.className = "stark0";
  starkP.className = "stark0";
  starkT.className = "stark0";
}, false)

var hover = document.getElementById("valarD");
var doha = document.getElementById("doha");
hover.addEventListener("mouseover", () => {
  doha.className = "dohaeris";
}, false)
hover.addEventListener("mouseout", () => {
  doha.className = "dohaeris0";
}, false)

var hover = document.getElementById("valarM");
var morghu = document.getElementById("morghu");
hover.addEventListener("mouseover", () => {
  doha.className = "morghulis";
}, false)
hover.addEventListener("mouseout", () => {
  doha.className = "morghulis0";
}, false)


function menunav() {
  var x = document.getElementById("navmenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function menunav2() {
  var x = document.getElementById("navmenu");
  if (x.className === "topnav topnav2") {
    x.className += " responsive";
  } else {
    x.className = "topnav topnav2";
  }
}