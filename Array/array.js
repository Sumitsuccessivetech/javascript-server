//creating an array
const array1 = ['a', 'b', 'c'] 
const array2 = ['b', 'c' , 'd']

// checking the value is array or not using isArray
Array.isArray(array1); 

// merging one array to another array using concat
const array3=array1.concat(array2); 
console.log(array3);


 // executing a provide function once for each element of an array using foreach method
array1.forEach(element => console.log(element));

// cheking the existence of an array using includes method
const array4 = [1, 2, 3];
console.log(array4.includes(2));

//fondong the index using indexof method
const cricketer = ['Kohli', 'Dhoni', 'Rohit', 'Rahul', 'ab develliers'];
console.log(cricketer.indexOf('ab develliers'));

// adding array on a single string usin g join()
const name1 = ['Sumit', 'Upadhyay'];
console.log(name1.join());

const name2 = ['Chirag', 'Arora'];
console.log(name2.join(''));

//returning key using keys method
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

//removing the last element using POP() method
console.log(cricketer.pop());

//pushing the new element in the array using PUSH() method
cricketer.push('AB Develliers', 'D Paddikal', 'Morris');
console.log(cricketer);

//reversing the array using reversed method
const reversed = array1.reverse();
console.log('reversed:', reversed);

// slicing the array from given index using slice() method
console.log(cricketer.slice(3));


