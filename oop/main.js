// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
// 		this.numLegs = numLegs
// 		this.children = []
// 	}
// 	giveBirth(name){
// 		this.children.push(name)
//     }
// }

// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children);

// const dog = new Animal("Rocho", 5)
// console.log(dog.name);




// class Human {
// 	constructor(name, age, isFriendly){
// 		this.name = name
// 		this.age = age
// 		this.isFriendly = isFriendly
// 	}
// }

// const dude = new Human("Jake", 21, false)
// console.log(dude);




// class Vehicle {
// 	constructor(x, y, speed){
// 		this.x = x
// 		this.y = y
// 		this._speed = speed
// 		Vehicle.carsSold++
// 	}
// 	set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
// 	static getInfo() {
// 		console.log("We've sold " + Vehicle.carsSold + " vehicles.");
// 	}
// 	static calculateMoney() {
// 		console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
// 	}
// }

// Vehicle.carsSold = 0;
// const car = new Vehicle(3, 1, 5)
// const car1 = new Vehicle(3, 1, 5)


// console.log(car.x) //prints 3
// console.log(car.y) //prints 1
// console.log(car._speed) //prints 5
// Vehicle.getInfo()
// Vehicle.calculateMoney()





class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}


class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}

const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = false
let relevantFeeder

if (weArePoor) {
    relevantFeeder = cheapFeeder
}
else {
    relevantFeeder = luxuryFeeder
}

class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

const bumdo = new Animal("Bumdo", "elephant",relevantFeeder)
bumdo.eat()
const bisma = new Animal("Bisma", "lion", /*injection ->*/ relevantFeeder /*<- injection*/)
bisma.eat() //will print "Just consumed chia seeds. Feels good."
