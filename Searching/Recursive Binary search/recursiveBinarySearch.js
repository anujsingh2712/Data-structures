let arr=[10,11,23,45,56,78,90];
let start=0;
let toFind=11;
let end=arr.length-1;
let mid;

function recursiveBinarySearch(start,end,arr){

    mid=Math.floor((start+end)/2);
    console.log(mid);
    if(arr[mid]==toFind){
        return 1;
    }
    else if(arr[mid]>toFind){
        return recursiveBinarySearch(start,mid-1,arr);
    }
    else{
        return recursiveBinarySearch(mid+1,end,arr);
    }
    // return 1;
}
const result=recursiveBinarySearch(start,end,arr);
console.log(result);

if(result===1){
    console.log("element is present");
}
else{
    console.log("the element is not present");
}