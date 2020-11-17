var mage = {
  name: "Atticus",
  atk: 20,
  magi: 100,
  def: 30,
  spd: 40,
  res: 90,
  level: 1,
  special: "Elemental Fury"
}

function randomMage(){

  var atkN = mage.atk;
  var magiN = mage.magi;
  var defN = mage.def;
  var spdN = mage.spd;
  var resN = mage.res;

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

function mageStat() {
  document.getElementById("atk").value = mage.atk;
  document.getElementById("magi").value = mage.magi;
  document.getElementById("def").value = mage.def;
  document.getElementById("spd").value = mage.spd;
  document.getElementById("res").value = mage.res;
}


var tank = {
  name: "Tango",
  atk: 60,
  magi: 0,
  def: 100,
  spd: 25,
  res: 20,
  level: 1,
  special: "Parry"
}

var rogue = {
  name: "Midnight",
  atk: 100,
  magi: 20,
  def: 20,
  spd: 80,
  res: 60,
  level: 1,
  special: "sneak attack"

}

var mageStats = JSON.stringify(mage);
var magetoJson = JSON.parse(mageStats);

var tankStats = JSON.stringify(tank);
var tanktoJson = JSON.parse(tankStats);


var rogueStats = JSON.stringify(rogue);
var roguetoJson = JSON.parse(rogueStats);
