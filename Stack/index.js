let stack = [];
let string = "hello world";
let strLen = string.length;
let revString=[];
const popElement = () => {
   revString.push(stringArr[strLen-1]);
   strLen-=1;
}
const stringArr = string.split("");
while (strLen != 0) {
    popElement();
}

console.log(revString.join(""));