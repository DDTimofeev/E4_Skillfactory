function Device(name, power) {
    this.name = name
    this.power = power
    this.isTurnedOn = false
}

Device.prototype.TurnedOn = function () {
    console.log(this.name + " is turned on");
    this.isTurnedOn = true
}

Device.prototype.getPowerOn = function () {
    return this.isTurnedOn ? this.power : 0
}

const lamp = new Device('lamp', 40);
const pc = new Device('pc', 100);

console.log(lamp.getPowerOn() + pc.getPowerOn());

lamp.TurnedOn();
console.log(lamp.getPowerOn() + pc.getPowerOn());

pc.TurnedOn();
console.log(lamp.getPowerOn() + pc.getPowerOn());