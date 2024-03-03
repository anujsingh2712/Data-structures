let arr=[1,2,3,4,5,6,7,8,9,10,11,12,0];
const findEvenNumbers=()=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            console.log(arr[i] + " ")
        }
    }
}

const makeEveryElementDouble=()=>{
     for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
     }
     console.log(arr);
}
const arrayLength=()=>{
    let count=0;
    for(let i=0;arr[i]!=undefined;i++){
        count++;
    }
    console.log(count);
}
// arrayLength();
// makeEveryElementDouble();
// findEvenNumbers();


const superSetProblem=()=>{
    let dummy_array=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
           dummy_array[j]=arr[i]*2;
           j++;
        }
    }
    let count=0;
   for(let i=0;dummy_array[i]!=undefined;i++){
      count++;
   }

    console.log(dummy_array);
    console.log("array length",dummy_array.length);
}
superSetProblem();