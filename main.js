// ArrayList -like behavior in JavaScript
const myArrayList = [];
myArrayList.push(1);
myArrayList.push(2);
myArrayList.push(3);

console.log("ArrayList: ", myArrayList);
console.log("Element at index 2: ", myArrayList[2]);

class DynamicArray {
  constructor() {
    this.array = [];
  }

  append(value) {
    this.array.push(value);
  }

  get(index) {
    return this.array[index];
  }
}

const myDynamicArray = new DynamicArray();
myDynamicArray.append(1);
myDynamicArray.append(2);
myDynamicArray.append(3);

console.log("Dynamic Array: ", myDynamicArray.array);
console.log("Elements at index 2: ", myDynamicArray.get(2));
