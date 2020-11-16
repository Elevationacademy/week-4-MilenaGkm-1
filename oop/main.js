class Animal {
    constructor(name, numLegs) {
        this.name = name
		this.numLegs = numLegs
		this.children = []
	}
	giveBirth(name){
		this.children.push(name)
    }
}

const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly")
console.log(cat.children);

const dog = new Animal("Rocho", 5)
console.log(dog.name);




class Human {
	constructor(name, age, isFriendly){
		this.name = name
		this.age = age
		this.isFriendly = isFriendly
	}
}

const dude = new Human("Jake", 21, false)
console.log(dude);




class Vehicle {
	constructor(x, y, speed){
		this.x = x
		this.y = y
		this._speed = speed
		Vehicle.carsSold++
	}
	set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
	static getInfo() {
		console.log("We've sold " + Vehicle.carsSold + " vehicles.");
	}
	static calculateMoney() {
		console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
	}
}

Vehicle.carsSold = 0;
const car = new Vehicle(3, 1, 5)
const car1 = new Vehicle(3, 1, 5)


console.log(car.x) //prints 3
console.log(car.y) //prints 1
console.log(car._speed) //prints 5
Vehicle.getInfo()
Vehicle.calculateMoney()

