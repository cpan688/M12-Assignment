// STEP 1
class Cat {
    constructor(color) {
        this.color =  color;
    }
}

const Dog = class {
    constructor(color) {
        this.color = color;
    }
}


// STEP 2
const Garfield = new Cat("Orange");
const Lacy = new Dog("White");


// STEP 3
class Animal {
    born() {
        console.log('The Animal has been created.')
    }
}
const Cat1 = new Animal();
Cat1.born();


// STEP 4
class Animal {
    constructor(name) {
        this.name = name;
    }
    born() {
        console.log(`The Animal called ${this.name} has been created.`)
    }
}
const Cat2 = new Animal('Garfield');
Cat2.born();


// STEP 5
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    born() {
        console.log(`The Animal with the following features has been created: (type, breed, color, height, length)`)
        console.log(`${this.type, this.breed, this.color, this.height, this.length}`)
    }
}
const Cat3 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');
Cat3.born();


// STEP 6
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}
const a1 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');

for (propertyName in a1) {
    console.log(`Animal ${propertyName}: ${a1[propertyName]}`);
}

// const propertyNames = Object.getOwnPropertyNames(a1);
// propertyNames.forEach(propertyName => {
//   const propertyValue = a1[propertyName];
//   console.log(`Animal ${propertyName}: ${propertyValue}`);
// });



// STEP 7
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    speak() {
        if (this.type == 'Cat') {
            console.log(`The ${this.color} cat is meowing!`)
        } else if (this.type == 'Dog') {
            console.log(`The ${this.color} dog is barking!`)
        } else {
            console.log(`The ${this.color} ${this.type} is making some noise!`)
        }
    }
}
const c5 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');
c5.speak();



// STEP 8

// STEP 9