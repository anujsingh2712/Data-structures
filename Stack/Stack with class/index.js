class Stack {
    item = [];
    curSize = 0;
    maxSize = 10;
    constructor(value) {
        console.log("value is", value);
    }
    pushElement(val) {
        if (this.curSize > this.maxSize) {
            console.log("stack is full.")
        } else {
            this.item[this.curSize] = val;
            this.curSize = this.curSize + 1;
        }
    }
    displayElement(){
        console.log("items are",this.item);
    }
}

const object1 = new Stack(5);
object1.pushElement(10);
object1.pushElement(20);
object1.pushElement(30);
object1.pushElement(40);
object1.pushElement(50);
object1.pushElement(60);
object1.pushElement(70);
object1.pushElement(80);
object1.pushElement(90);
object1.pushElement(100);
object1.pushElement(110);
object1.pushElement(120);

object1.displayElement();