var mage = {
  name: "Atticus", //name of dog
  hp: 100, //health points
  atk: 20, // physical attack stat
  magi: 100, //magical attack stat
  def: 25, //physical defense stat
  spd: 40, //speed stat
  res: 90, //magical defense stat
  level: 1, // dog level
  special: "Elemental Fury" //dog's special attack
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
  magi: 25,
  def: 20,
  spd: 80,
  res: 60,
  level: 1,
  special: "sneak attack"

}

// this function gives the character you choose a random stat boost at the beginning of the game
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

//displays the stats of the dog
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
