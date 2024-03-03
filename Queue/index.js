let circularQueue=[];
const maxSize=5;
let front=0;
const circularEnqueue=(value)=>{
    if(front>=maxSize){
        front=(front)%maxSize;
    }
   circularQueue[front]=value;
   front++;
}
const circularDeque=()=>{
    if(circularQueue.length==0){
        console.log("can't delete the element from the queue");
        return;
    }
    if(circularQueue.length==1){
      front=1;
    }
    for(let i=front;i<maxSize;i++){
       circularQueue[i]=circularQueue[i+1];
    }
    circularQueue.length=circularQueue.length-1;
}
const display=()=>{
    console.log(circularQueue);
}
circularEnqueue(10);
circularEnqueue(20);
circularEnqueue(30);
circularEnqueue(40);
circularEnqueue(50);
circularEnqueue(60);
circularDeque();
circularDeque();
// circularDeque();




display();