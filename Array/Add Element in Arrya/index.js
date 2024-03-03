function arrayHandler(){
    const arr=[1,2,3,4,5,6];
    const num=document.getElementById("number").value;
    const index=document.getElementById("index").value;
    
    for(let i=arr.length-1;i>=index;i--){
        arr[i+1]=arr[i];
    }
    arr[index]=num;
     console.log(arr);
}