//CREATE ARRAY WITH CLASSIC METHODS
class MyOwnArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    deleteAtIndex(index) {
      const item = this.data[index];
      this.shiftItems(index);
      return item;
    }
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  const myArray = new MyOwnArray();
  myArray.push('Hello');
  myArray.push('world');
  myArray.push('!');
  myArray.push('!');
  myArray.push('!');
  myArray.get(0);
  myArray.pop();
  myArray.deleteAtIndex(3);
  myArray.shiftItems(2);