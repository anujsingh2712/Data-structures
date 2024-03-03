const factorial=(x)=>{
 if(x==0){
    return 1;
 }   
 else{
   return x*factorial(x-1);
 }
}


const result= factorial(0);
console.log("the factorial of the number is ",result);