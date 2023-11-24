const { MyArray, MySet, MyMap } = require('./collectionTypes');

const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log('Array:', myArray.getItems());

const mySet = new MySet();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log('Set:', mySet.getItems());

const myMap = new MyMap();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);
console.log('Map:', myMap.getItems());