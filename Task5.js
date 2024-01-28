class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isTurnedOn = false;
    }
    getinfo()
    {
        console.log(this.name + " is Turned On!");
        this.isTurnedOn = true;
    }

    getinfo()
    {
        return this.isTurnedOn ? this.power : 0;
    }
}

class MadeIn extends Device {
    constructor(fabricator, name) {
        super(name);
        this.fabricator = fabricator;
    }

    getinfo(){
        if (this.name) {
            return 'Made in ' + this.name
        } else {
            return super.getinfo()
        }
    }
}

const made = new MadeIn(true, 'China');
console.log(made.getinfo())
