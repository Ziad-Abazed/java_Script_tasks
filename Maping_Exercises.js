// Instructions: 
//  - You should solve all these questions using .map() function 



/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
const array1 = [2, 5, 100];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
function stringItUp(arr){
 let map2=arr.map(num=>num.toString())


return map2}

console.log(stringItUp([1,3,4,6]))
/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
function capitalizeNames(arr){
let map3=arr.map(word=>{
word2=word.toLowerCase();
  return word2.charAt(0).toUpperCase()+word2.slice(1);
})
return(map3);
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
function namesOnly(arr){
  let map4=arr.map(nam=>{
    return nam.name;
  })
  return map4;

}
console.log(namesOnly(
  [
      {
          name: "Angelina Jolie",
          age: 80
       },
      {
           name: "Eric Jones",
          age: 2
       },
      {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
          age: 16
      },
       {
           name: "Bob Ziroll",
           age: 100
       }
       ]
))


/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 * 
 */

function makeStrings(arr){
    let Matrixname=arr.map(nam=>{
      if(nam.age>50){
      return nam.name+" can go to The Matrix";}
      else{
        return nam.name+" is under age!!"
      }
    })
    return Matrixname;

}
console.log(makeStrings(
  [
    {
        name: "Angelina Jolie",
        age: 80
     },
    {
         name: "Eric Jones",
        age: 2
     },
    {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
        age: 16
    },
     {
         name: "Bob Ziroll",
         age: 100
     }
     ]
))

/*


* Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
function readyToPutInTheDOM(arr){
  let PutInTheDOM=arr.map(nam=>{
   return "<h1>"+nam.name+"</h1>"+"<h2>"+80+"</h2>"
  })
  return PutInTheDOM;

}
console.log(readyToPutInTheDOM(
  [
    {
        name: "Angelina Jolie",
        age: 80
     },
    {
         name: "Eric Jones",
        age: 2
     },
    {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
        age: 16
    },
     {
         name: "Bob Ziroll",
         age: 100
     }
     ]
))

/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
function doubleValues(arr){
  const doubleval = arr.map(x => x * 2);
  return doubleval
}
console.log("doubleValues array")
console.log(doubleValues([1,-2,-3]))
/*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
function valTimesIndex(arr){
 let timesMap=arr.map((num,index)=>{
  return num*index;
 })
 return timesMap;
}
console.log("timesMap")
console.log(valTimesIndex([1,-2,-3]));
 /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
 function extractKey(arr,k){
  let map6=arr.map(nam=>{
    return nam[k];
  })
  return map6;
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );

 /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */


function extractFullName(arr){
  let fullname=arr.map(name=>{
    return name.first+" "+name.last
  })
  return fullname;
}
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr){
  let map9=arr.filter(item => item%2 == 0);
return map9
}
console.log(evenOnly([1,3,2,6,8]));

/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr){
  let multi=arr.filter(item => item%4 == 0);
return multi;
}
console.log(multiFour([1,3,2,6,8,20]));

/*
12
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr,char){
  let con=arr.filter(word=>{
    return word.includes(char);
  })
  return con;
}
console.log(containChar(["hello","world"],'w'));

/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr){
  let evenIndexOdd=arr.filter((item,index)=>index%2==0&&item.length%2!==0 );
  return evenIndexOdd;
 
  }
  console.log(evenIndexOddLength(["alex","mercer","madrasa","rashdd","emad","hdala"]))

/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'ahmed', last: 'waleed' }, age: 67 }]
*/
function olderThan(persons,num){
  let person=persons.filter(item => item.age > num);

  return person;
}
console.log(olderThan([{ name: { first: 'ahmed', last: 'waleed' }, age: 67 },{ name: { first: 'khaled', last: 'rami' }, age: 50 }],56));

/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]*/
function shorterThan(arr,num){
let shorter=arr.filter(item=>item.length<num)
return shorter;

}
console.log(shorterThan(["alex","mercer","madrasa","rashed2","emad","hala"],5));