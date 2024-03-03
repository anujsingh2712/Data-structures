let string_1="Hello";
let string_2="elloH";

if(string_1.length!==string_2.length){
    console.log("The provided string is not a string.");
}
else{
    let dummyArr=string_2.split("");
    let i;
    
    for(i=0;string_1[i]!=undefined;i++){
       for(let j=0;j<dummyArr.length;j++){
           if(string_1[i]===dummyArr[j]){
            dummyArr[j]=dummyArr[j+1];

            if(j===dummyArr.length-1){
                  dummyArr.length=dummyArr.length-1;
            }
           }
          
       }
    }
    if(i===string_1.length && dummyArr.length===0){
        console.log(`${string_1} ${string_2} are anagram`);
       }
       else{
        console.log(`${string_1} ${string_2} are anagram`);
       }
}