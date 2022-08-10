/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."*/

function tellfortune(degree,country,name,num){
    return `You will be a ${degree} in ${country}, and married to ${name} with ${num} kids.`

}
console.log(tellfortune("software engineer","amarica","maya","2"));



//---------------------------------------------------------------------------------------------------------------
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"*/

function calculateDogAge(dogage){

return `Your doggie is ${7*dogage} years old in dog years!`

}

console.log(calculateDogAge(1));

//----------------------------------------------------------------------------------------------------------------
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;*/

function calculateSupply(age,amount){
    after_age=100-age;
    number_cups=(365*amount)*after_age;

    return `You will need ${number_cups} cups of tea to last you until the ripe old age of 100 if you drink ${amount} cups per day`;

}

console.log(calculateSupply(22,3));

//-----------------------------------------------------------------------------------------------

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  return "hello "+name;
}
console.log("ziad");

//-----------------------------------------------------------------------------------------------

/*
5
what is the error:
function double(cat) {
  return 2 * x;
we need to change x to cat}
sol:
function double(cat) {
  return 2 * x;}
//----------------------------------------------

function double(7) {
  return 2 * 7;
  we can not write 7 as a parameter
}
sol:
function double(num) {
  return 2 * num;

}
//----------------------------------------------

function double('7') {
  return 2 * 'x';
   we can not write string as a parameter
   and can not make multi with string
}
sol:
function double(x) {
  return 2 * 'x';}

*/
//-----------------------------------------------------------------------------------------------


/*
6
fix these functions:
function double1(x){
  return 2 * x ;
}
//-----------------------------------------

function double2 (x){
return 2 * x;
}
//------------------------------------------

function double3 (x) {
  return 2 * x;}

*/
//-----------------------------------------------------------------------------------------------


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(cub){
  return cub**3;
}
console.log(cube(4));
//-----------------------------------------------------------------------------------------------


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multi(p1,p2){
  return p1*p2;
}
console.log("the result of multi: "+multi(10,4));

//-----------------------------------------------------------------------------------------------

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  if(age>=20){
    return "yes you can";
  }
  else{
    after=20-age;
  return  `please come back after ${after} years to get one`}
}
console.log(canIGetADrivingLicense(17))

//-----------------------------------------------------------------------------------------------

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(st1,st2){
  if(st1.length==st2.length){
    return true;
  }
  else return false;
}
console.log(sameLength("tee","tree"));
//-----------------------------------------------------------------------------------------------

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1,num2){
  if(num1>num2){
    return "the largerNubmer is: "+num1;
  }
  if(num1==num2){
    return "the number is equal";
  }
  return "the largerNubmer is: "+ num2;

}
console.log(largerNubmer(3,4));
//console.log(largerNubmer(3,3));
console.log(largerNubmer(7,4));

//-----------------------------------------------------------------------------------------------


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3){
  if(num1<num2 && num1<num3){
    return "the smallerNubmer is: "+num1;
  }
 if(num1>num2 && num3>num2){
  return "the smallerNubmer is: "+ num2;}
  else  return "the smallerNubmer is: "+ num3;

}
console.log(smallerNubmer(3,4,2));
console.log(smallerNubmer(1,3,6));
console.log(smallerNubmer(7,4,8));

//-----------------------------------------------------------------------------------------------


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(s1,s2,s3,s4,s5){
  if(s1.length<s2.length && s1.length<s3.length && s1.length<s4.length && s1.length<s5.length){
    return s1;
  }
  if(s2.length<s1.length && s2.length<s3.length && s2.length<s4.length && s2.length<s5.length){
    return s2;
  }
  if(s3.length<s1.length && s3.length<s2.length && s3.length<s4.length && s3.length<s5.length){
  return s3;
}
if(s4.length<s1.length && s4.length<s2 && s4.length<s3.length && s4.length<s5.length){
  return s4;
}
return s5;

}
console.log(shorterString("air","tr","car","github","byyyyyyyy"));
console.log(shorterString("air","t","car","github","by"));

//-----------------------------------------------------------------------------------------------

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/


function longerString(s1,s2,s3,s4,s5){
  if(s1.length>s2.length && s1.length>s3.length && s1.length>s4.length && s1.length>s5.length){
    return s1;
  }
  if(s2.length>s1.length && s2.length>s3.length && s2.length>s4.length && s2.length>s5.length){
    return s2;
  }
  if(s3.length>s1.length && s3.length>s2.length && s3.length>s4.length && s3.length>s5.length){
  return s3;
}
if(s4.length>s1.length && s4.length>s2.length && s4.length>s3.length && s4.length>s5.length){
  return s4;
}
return s5;

}
console.log(longerString("air","tr","car","github","byyyyyyyy"));
console.log(longerString("air","t","car","github","by"));
//-----------------------------------------------------------------------------------------------


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function iseven(num){
  if(num%2==0){
  return "is number even: " +true;
}
return "is number even: " +false;
}

console.log(iseven(4));
console.log(iseven(7));

//-----------------------------------------------------------------------------------------------

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
  if(num%2!==0){
  return "is number odd: " +true
}
return "is number odd: " +false;
}
console.log(isOdd(3));
console.log(isOdd(4));
//-----------------------------------------------------------------------------------------------

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num){
  if(num<0){
    return num * -1;
  }
  return num;
}
console.log(positive(-4));

//-----------------------------------------------------------------------------------------------

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullname(firstName,lastName){

  return firstName+" "+lastName;
  
  }
  console.log(fullname("ziad","abazeed"));

//-----------------------------------------------------------------------------------------------

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5){
  return (n1+n2+n3+n4+n5)/5;
}

console.log(average(10,22,30,50,11));
//-----------------------------------------------------------------------------------------------


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
console.log(Math.random()); 
//-----------------------------------------------------------------------------------------------

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(2,6));
//-----------------------------------------------------------------------------------------------


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(avg){
  if(avg>=95 && avg<=100){
    return "A"
  }
  if(avg>=85 && avg<=94){
    return "B"
  }
  if(avg>=70 && avg<=84){
    return "C"
  }
  if(avg>=60 && avg<=69){
    return "D"
  } 

  else return "f"

}
console.log(scoreInUniversty(95));
console.log(scoreInUniversty(65));
console.log(scoreInUniversty(35));

//-----------------------------------------------------------------------------------------------


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
count=0;
function counter(){
return count++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



//-----------------------------------------------------------------------------------------------


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  count=0;
  console.log (" the counter reset");
}
resetCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
//-----------------------------------------------------------------------------------------------
