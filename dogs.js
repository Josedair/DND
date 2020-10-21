const mage = {
  name: "Atticus",
  atk: 20,
  magi: 100,
  def: 40,
  spd: 60,
  res: 90,
  level: 1,
  special: "Elemental Fury"
}

const tank = {
  name: "Tango",
  atk: 60,
  magi: 0,
  def: 100,
  spd: 30,
  res: 20,
  level: 1,
  special: "Parry"
}

const rogue = {
  name: "Midnight",
  atk: 100,
  magi: 20,
  def: 20,
  spd: 80,
  res: 60,
  level: 1,
  special: "sneak attack"

}

const mageStats = JSON.stringify(mage);
const magetoJson = JSON.parse(mageStats);

const tankStats = JSON.stringify(tank);
const tanktoJson = JSON.parse(tankStats);


const rogueStats = JSON.stringify(rogue);
const roguetoJson = JSON.parse(rogueStats);
