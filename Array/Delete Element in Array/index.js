function deleteElementHandler(){
    const arr=[1,2,3,4,5,6,7,8,9,10];
   const value=document.getElementById("number").value;
   const index=arr.indexOf(parseInt(value));
   console.log( index);
   for(let i=index;i<arr.length-1;i++){
    arr[i]=arr[i+1];
   }
   console.log(arr);
}