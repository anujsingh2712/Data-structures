// let arr=[10,3,4,5,6,10];
// let minIndex;
// const selectionSort=()=>{
//     for(let i=0;i<arr.length;i++){
//         let minIndex=i;
//          for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j;
//             }
//          }
//          let temp=arr[i];
//          arr[i]=arr[minIndex];
//          arr[minIndex]=temp;
//     }
// }
// selectionSort();
// console.log(arr);


let arr=[5,4,3,2,1];
let minIndex;

const selectionSort=()=>{
    for(let i=0;i<arr.length;i++){
        minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
}
selectionSort();
console.log(arr);

















