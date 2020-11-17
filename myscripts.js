let randomNum=Math.floor(Math.random() * Math.floor(100));
let randomNum2=Math.floor(Math.random() * Math.floor(100));

let user=prompt(randomNum + " + " + randomNum2 + " Add the numbers and enter your answer")

if(user==randomNum + randomNum2){
alert ("You're right!")
}
else{
 alert ("Try again!")
}