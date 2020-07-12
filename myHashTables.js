//CREATE HASH TABLES WITH CLASSIC METHODS
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){ //only if collision
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] && this.data[i].length) {
          if (this.data[i].length > 1) { //if collision
            for (let j = 0; j < this.data[i].length; j++) { // loop through all the potential collisions
              result.push(this.data[i][j][0]);
            }
          } else {
            result.push(this.data[i][0][0]);
          } 
        }
    }
    return result; 
  }

  values() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] && this.data[i].length) {
          if (this.data[i].length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][1]);
            }
          } else {
            result.push(this.data[i][0][1]);
          } 
        }
    }
    return result; 
  }
}


const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.set('oranges', 54)
myHashTable.set('apple', 987)
myHashTable.set('strawberry', 12)
myHashTable.get('apple')
console.log(myHashTable.keys())