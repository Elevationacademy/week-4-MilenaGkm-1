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




// OOP Inheritance
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}


class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
    
    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}


class Teacher extends Person{
    constructor(name, startYear, salary) {
        super(null, startYear)
        this.salary = salary
        this.name = "Professor " + name
        this.courses = {}
    }

    giveGrade(student, courseName, grade){
        student.receiveGrade(courseName, grade)
    }

    addCourse(course) {
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
}


class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}


class Principal extends Person{
    constructor(name, startYear){
        super(name, startYear)
        this.teachers = []
        this.students = []
    }

    hireTeacher(teacher){
        this.teachers.push(teacher)
        console.log(this.name + " just hired " + teacher.name);
    }

    recruitStudent(student){
        this.students.push(student)
    }

    expelStudent(student){
        for(let i in this.students){
            if(this.students[i].name === student.name){
                return this.students.splice(i, 1)
            }
        }
    }

    transferStudent(student, principal){
        this.expelStudent(student)
        principal.recruitStudent(student)
    }
}





const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron







// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// console.log(t1.name)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// t1.giveGrade(s1, "Algebra II", 82)
// console.log(t1.courses)

// const p1 = new Principal("Martin", 1991)
// p1.hireTeacher(t1)
// p1.expelStudent(s1)
// console.log(p1.students)

// const firstGrade = s1.grades[0]


// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"



