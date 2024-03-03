// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = value;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     linedListSize() {
//         return this.size;
//     }


//     insertAferNode(value) {
//         const newNode = new Node(value);
//         let curElement = this.head;
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.size++;
//         }
//         else {
//             while (curElement.next !== null) {
//                 curElement = curElement.next;
//             }
//             curElement.next = newNode;
//             newNode.next = null;
//         }
//     }

//     isertNodeAtGivenIndex(index, value) {
//         if (index > this.size) {
//             console.log("the provided index is greater than the size of the array!");
//             return;
//         }
//         if (index < 0) {
//             console.log("the size of the index cannot be less than 0");
//             return;
//         }
//         const newNode = new Node(value);
//         if (index === 0) {
//             newNode.next=this.head;
//             this.head=newNode;
//         }
//         else {
//             let curIndex = 0;
//             let curNode = this.head;
//             while (curIndex !== index - 1) {
//                 curNode = curNode.next;
//                 curIndex++;
//             }
//             newNode.next = curNode.next;
//             curNode.next = newNode;
//         }
//     }

//     removeLinkedList(){
//         if(this.isEmpty()){
//             console.log("the linked list is already empty");
//         }
//         else{

//         }
//     }
//     printLinkedList() {
//         let curElement = this.head;
//         while (curElement) {
//             console.log(curElement.value);
//             curElement = curElement.next;
//         }
//     }
// }

// const insertNode = new LinkedList();
// for (let i = 0; i < 10; i++) {
//     insertNode.insertAferNode(i);
// }

// insertNode.isertNodeAtGivenIndex(0, -1);
// insertNode.printLinkedList();


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(value) {
        this.head = new Node(value);
        this.size = 1;
    }
    isEmpty() {
        return this.size === 0;
    }
    insertNextNode(value) {
        const newNode = new Node(value);
        let curElement = this.head;
        if (this.isEmpty()) {
            this.head = newNode;
            this.size++;
        }
        else {
            while (curElement.next !== null) {
                curElement = curElement.next;
            }
            curElement.next = newNode;
            newNode.next = null;
            this.size++;
        }
    }

    removeParticularLinkedlist(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let curElement = this.head;
        let prevElement = null;
        let curIndex = 0;
        while (curIndex !== index) {
            prevElement = curElement;
            curElement = curElement.next;
            curIndex++;
        }
        prevElement.next = curElement.next;
    }

    removeParticularLinkedListByValue(value) {
        if (this.size === 0) {
            console.log("the linked list is empty!");
            return;
        }
        else {
            let curNode = this.head;
            let prevLinkedList = null;
            while (curNode.value !== value) {
                prevLinkedList = curNode;
                curNode = curNode.next;
            }
            prevLinkedList.next = curNode.next;
        }
    }

    searchLinkedList(value) {
        if (this.isEmpty()) {
            console.log("the linkedlist is already empty.")
        }
        else {
            let curNode = this.head;
            let index = -1;
            while (curNode) {
                index++;
                if (curNode.value === value) {
                    console.log(`the ${value} is present in the linked list and the index is ${index}`);
                    break;
                }
                else {
                    curNode = curNode.next;
                }
            }
            if (curNode === null) {
                console.log("the value is not present in the linked list");
            }
        }
    }

    reverseTheLinkedList(){

    }
    printLinkedList() {
        let curElement = this.head;
        while (curElement) {
            console.log(curElement.value);
            curElement = curElement.next;
        }
    }
}

const newNode = new linkedList();
for (let i = 0; i <= 10; i++) {
    newNode.insertNextNode(i);
}
newNode.searchLinkedList(1);
// newNode.printLinkedList();