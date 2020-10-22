//creating object and assinging one source to target source using assign() method
let object;
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);

//creating new object using create() method
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  const me = Object.create(person);
  me.name = 'Sumit'; 
  me.isHuman = true; 
  me.printIntroduction();

//freezing a object so that it can not be able longer to change using  freeze method
const obj = {
    prop: 42
  };
Object.freeze(obj);
console.log(obj.prop);

//determing whether two values are same or not using .is() method
Object.is('Successive','Successive'); 

//checking object is extensible or not using isExtensible() method
const object1 = {};
console.log(Object.isExtensible(object1));

// checking objecte is frozen or not by using isFrozen method
const object2 = {
    property2: 42
  };
  console.log(Object.isFrozen(object2));

// checking object is seal or not using isSealed() method
const object3 = {
    property3: 42
  };
  console.log(Object.isSealed(object3));
  
// returning an array of given object using keys() method
const object4 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object4));

//returning the primitive value of the specified object using valueOf()
function MyNumberType(n) {
    this.number = n;
  }
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
const object7 = new MyNumberType(4);
console.log(object7 + 3); 

//transfering a list of key value to an object using fromentries
const entries = new Map([
    ['sumit', 'upadhyay'],
    ['R&D', 422]
  ]);
  
  const obj1= Object.fromEntries(entries);
  
  console.log(obj1);