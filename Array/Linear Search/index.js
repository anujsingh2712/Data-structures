function searchHandler(){
    const arr=[1,2,3,4,5,6,7,8,9,11];
    const value=document.getElementById("number").value;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            console.log(`Element is present at ${i+1}`);
            break;
        }
    }
}