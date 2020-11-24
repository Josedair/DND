var mage = {
  name: "Atticus",
  hp: 100,
  atk: 20,
  magi: 100,
  def: 30,
  spd: 40,
  res: 90,
  level: 1,
  special: "Elemental Fury"
}




var tank = {
  name: "Tango",
  hp: 100,
  atk: 60,
  magi: 5,
  def: 100,
  spd: 25,
  res: 20,
  level: 1,
  special: "Parry"
}

var rogue = {
  name: "Midnight",
  hp: 100,
  atk: 100,
  magi: 20,
  def: 20,
  spd: 80,
  res: 60,
  level: 1,
  special: "sneak attack"

}

function statBoost(dog){
  var dog;
  var atkN = dog.atk;
  var magiN = dog.magi;
  var defN = dog.def;
  var spdN = dog.spd;
  var resN = dog.res;

  atkN = atkN + Math.floor((Math.random()* 5)+1);
  magiN = magiN + Math.floor((Math.random()* 5)+1);
  defN = defN + Math.floor((Math.random()* 5)+1);
  spdN = spdN + Math.floor((Math.random()* 5)+1);
  resN = resN + Math.floor((Math.random()* 5)+1);

  document.getElementById("atk").value = atkN;
  document.getElementById("magi").value = magiN;
  document.getElementById("def").value = defN;
  document.getElementById("spd").value = spdN;
  document.getElementById("res").value = resN;
}

function dogStats(dog) {
  var dog;
  document.getElementById("atk").value = dog.atk;
  document.getElementById("magi").value = dog.magi;
  document.getElementById("def").value = dog.def;
  document.getElementById("spd").value = dog.spd;
  document.getElementById("res").value = dog.res;
}

var mageStats = JSON.stringify(mage);
var magetoJson = JSON.parse(mageStats);

var tankStats = JSON.stringify(tank);
var tanktoJson = JSON.parse(tankStats);


var rogueStats = JSON.stringify(rogue);
var roguetoJson = JSON.parse(rogueStats);
