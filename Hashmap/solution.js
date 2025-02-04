// 706. Design HashMap

// Problem Statement

// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:
// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

// Understand the problem first...

// hum ne aik hasmap name ki class bnani hy jis me aik object ko empty initailize krna hy pir us  class me kuch method design krne jo ke add kre ge value ko agr pehle se hy tu update kre ga. Doosra get ka function bnana hy jo ke hme us key ki vlaue de ga. Is ke ilawa remove ka method bnana hy jo ke specific ke se element remove kre ga...

class MyHashMap {
  constructor() {
    this.hashmap = {};
  }

  put(key, value) {
    this.hashmap[key] = value;
    console.log(this.hashmap);
  }

  get(key) {
    const keys = Object.keys(this.hashmap);
    let result = null;
    key = key.toString();
    if (keys.includes(key)) {
      result = this.hashmap[key];
    } else {
      result = -1;
    }
    return result;
  }

  remove(key) {
    key = key.toString();
    const keys = Object.keys(this.hashmap);
    if (keys.includes(key)) {
      delete this.hashmap[key];
    }
  }
}

const newInstance = new MyHashMap();
console.log(newInstance.put(1, 2)); // { name: "Farooq" }
console.log(newInstance.put(2, 2)); // { name: "Farooq" }
console.log(newInstance.get(2)); // "11th"
console.log(newInstance.remove(2));
console.log(newInstance.hashmap); // { name:"Farooq" }
