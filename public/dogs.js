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
