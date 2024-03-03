const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
let arr3=[];

for(let i=0;i<arr1.length;i++){
    arr3[i]=arr1[i];
}
for(let i=0;i<arr2.length;i++){
    arr3[arr2.length+i]=arr2[i];
}

console.log("arr3",arr3);