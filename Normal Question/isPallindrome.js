let string="ananujna";
let str=string.split("");
const checkIsPallindrome=()=>{
    for(i=0;i<str.length/2;i++){
       if(string[i]!=string[string.length-i-1]){
        console.log("The string is not a pallindrome");
        break;   
    }
    }
    
    if(i===Math.ceil(string.length/2)){
        console.log("the given string is a pallindrome");
    }
    
}

checkIsPallindrome();