function hashFunction(key, arrayLength) {
  let hash = 19;

  for (i = 0; i < key.length; i++) {
    hash = (hash * key.charCodeAt(i)) % arrayLength;
  }

  return hash;
}

class HashTable {
  table = new Array(3);
  numItems = 0;

  resize() {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((array) => {
      if (array) {
        array.forEach(([key, value]) => {
          const index = hashFunction(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    const index = hashFunction(key, this.table.length);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  getItem = (key) => {
    const index = hashFunction(key, this.table.length);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].find((innerArray) => innerArray[0] === key);
  };
}

const testTable = new HashTable();
testTable.setItem("hello", 1);
console.log(testTable.getItem("hello"));
