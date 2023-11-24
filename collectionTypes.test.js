const { MyArray, MySet, MyMap } = require('./collectionTypes');

test('Test MyArray', () => {
  const myArray = new MyArray();
  myArray.push(1);
  myArray.push(2);
  myArray.push(3);
  expect(myArray.getItems()).toEqual([1, 2, 3]);
});

test('Test MySet', () => {
  const mySet = new MySet();
  mySet.add(1);
  mySet.add(2);
  mySet.add(3);
  expect(mySet.getItems()).toEqual([1, 2, 3]);
});

test('Test MyMap', () => {
  const myMap = new MyMap();
  myMap.set('a', 1);
  myMap.set('b', 2);
  myMap.set('c', 3);
  expect(myMap.getItems()).toEqual([['a', 1], ['b', 2], ['c', 3]]);
});