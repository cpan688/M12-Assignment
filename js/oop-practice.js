// STEP 1
// class Cat {
//     constructor(color) {
//         this.color =  color;
//     }
// }

// const Dog = class {
//     constructor(color) {
//         this.color = color;
//     }
// }


// STEP 2
// const Garfield = new Cat("Orange");
// const Lacy = new Dog("White");


// STEP 3
// class Animal {
//     born() {
//         console.log('The Animal has been created.')
//     }
// }
// const Cat1 = new Animal();
// Cat1.born();


// STEP 4
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     born() {
//         console.log(`The Animal called ${this.name} has been created.`)
//     }
// }
// const Cat2 = new Animal('Garfield');
// Cat2.born();


// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     born() {
//         console.log(`The Animal with the following features has been created:`)
//         console.log(` Type: ${this.type}\n Breed: ${this.breed}\n Color: ${this.color}\n Height: ${this.height}\n Length: ${this.length}`)
//     }
// }
// const Cat3 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');
// Cat3.born();


// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const a1 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');

// for (propertyName in a1) {
//     console.log(`Animal ${propertyName}: ${a1[propertyName]}`);
// }

// // const propertyNames = Object.getOwnPropertyNames(a1);
// // propertyNames.forEach(propertyName => {
// //   const propertyValue = a1[propertyName];
// //   console.log(`Animal ${propertyName}: ${propertyValue}`);
// // });


// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak() {
//         if (this.type == 'Cat') {
//             console.log(`The ${this.color} cat is meowing!`)
//         } else if (this.type == 'Dog') {
//             console.log(`The ${this.color} dog is barking!`)
//         } else {
//             console.log(`The ${this.color} ${this.type} is making ${this.type} noise!`)
//         }
//     }
// }
// const a2 = new Animal('Cat', 'Siamese', 'Black', '2ft', '4ft');
// a2.speak();

// const a3 = new Animal('Dog', 'Retriever', 'Gold', '4ft', '6ft');
// a3.speak();

// const a4 = new Animal('Cow', 'Milk', 'White', '6ft', '8ft');
// a4.speak();

// STEP 8
/* Convert all of your properties to private properties. Then, create a private method called checkType(). 
    In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. 
    Then, create a privileged method called speak that returns the value of the checkType() method. 
    The console window should now display “The <animal type> has made a noise!” */

// function Animal(type, breed, color, height, length) {
//     let _type = type;           // PRIVATE PROPERTIES   
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() { return _type; }        // PRIVATE METHOD
//     this.speak = function() { console.log(`This ${checkType()} has made a noise!`) }   // PRIVILEGED METHOD
// }
// const c1 = new Animal('dog', 'Poodle', 'white', '1ft', '3ft');
// c1.speak();


// STEP 9
/* Create your own String method called findWords that inherits from the native String Object.
    This method should find all instances of a specific word within a provided paragraph of text. 
    It should then alert out to the user the number of time that word was found in the paragraph.
    Remember, you’ll need to add your method to the String object’s prototype. */

