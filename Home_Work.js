/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ==> [1,7,9,45]

 ["Str" "alex","moh"
==>  ["Str" "alex","moh"]
 'the','fox' 'over' lazy, 'dog',  ]
 ==> ['the','fox','over','lazy','dog']

*/




/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];
let i=0
while(i<fruits.length){
    if(fruits[i]=="Tomato" || fruits[i]=="Banana" ){
        console.log("the index for "+fruits[i]+" is "+ i);
    }
    i++;
    //the index for Tomato is 0
//the index for Banana is 1
}


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

Favorite_Food=["meat","grape_leaves","kabsi","burger","kubaa"];
Favorite_Sport=["football","car racing","moto racing"]; 
Favorite_Movie=["unknown","boyka","taken","runner"];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr){
    first_item=arr.shift();
    //first_item=arr[0];
    return first_item;

}
console.log(firstOfArray(['A','C','D','F']));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
   first_item=arr.pop();
    // first_item=arr[arr.length-1];
 
    return first_item;

}
console.log(lastOfArray(['A','C','D','F']));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.push(10);
for(i=0;i<3;i++){
    array.shift();
}
array.unshift(1,3,4,6,8);
console.log(array);





/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
array2.push(10);
console.log(array2);
array2.unshift(2);
console.log(array2);
array2.shift();
console.log(array2);
array2.pop();
console.log(array2);



/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr){
    let double_item=[];
    for(i=0;i<arr.length;i++){
     double_item.push(arr[i]*2);
    }
    return double_item;

   
}
console.log("double Values array")
console.log(doubleValues([2,4,5,6,8]));

/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr){
    even_item=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even_item.push(arr[i]);
        }
    }
    return even_item;
}
console.log("onlyEvenValues");
console.log(onlyEvenValues([1,2,4,3,5,8]))


/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast(arr){
    FirstAndLast=[];
    for(i=0;i<arr.length;i++){
        let cut=arr[i]
        let char1=cut.charAt(0);
        let charLast=cut.charAt(cut.length-1);
        let part=char1+charLast;

        FirstAndLast.push(part);
    }
    return FirstAndLast;
   
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
    let mid;
    let evenmid;
    if(arr.length %2 !==0){
        mid=arr.length/2 - 0.5;
        console.log("the middle of this odd array is: "+arr[mid]);
    }
    else{
        mid=arr.length/2;
        evenmid=mid-1;
        console.log("the middle of this even array is: "+arr[evenmid]+" and "+arr[mid]);
    }
}
middleOfArray([1,2,3,4,5]);
middleOfArray(["t","u","g","x"]);


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var names=[];
names[0]="ahmed";
names[1]="ziad";
names[2]="mohammed";
names[3]="waleed";
console.log(names);



/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr,index){
    return arr[index];

}
let nums=[1,2,3,4,5,6,7];
console.log("indexOfArray");
console.log(indexOfArray(nums,5));
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,2));



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr){
    arr.pop();
    return arr;

}
console.log(arrayExceptLast([1,2,3,4,5,6]));
console.log(arrayExceptLast(['A','B','C','D','E','F']));


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr,add){
    arr.pop();
    arr.push(add);
    return arr;

}
console.log(addToEnd([1,2,3,4,5,6],55));
console.log(addToEnd(['A','B','C','D','E','F'],'g'));


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr){
    let sumfor=0;
    let sumwhile=0;
    for(i=0;i<arr.length;i++){
        sumfor=sumfor+arr[i];
    }
    console.log("the sum using for is sum="+sumfor);
    j=0;

    while(j<arr.length){
        sumwhile=sumwhile+arr[j];
        j++;
    }
    console.log("the sum using while is sum="+sumwhile);
}

sumArray([1,2,3,4,5]);
sumArray([1,2,3,4,5,6,7]);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
      let min=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log( " minimum value inside this array using FOR  :  "+min);
     let j=0;
    while(j<arr.length){
        if(arr[j]<min){
            min=arr[j];
        }
        j++;
    }
    console.log( " minimum value inside this array using WHILE  :  "+min);

    }
   


minInArray([0,2,3,4,1,-1]);
minInArray([10,6,8,2,14]);


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray(arr,val){
    for(i=0;i<arr.length;i++){
        if(arr[i]===val){
            arr.splice(i,1);
        }
    }

    console.log("remove specific  From Array using FOR "+ arr);

    let j=0;
while(j<arr.length){
    if(arr[j]===val){
        arr.splice(j,1);
    }
    j++;
}

console.log("remove specific  From Array using WHILE: "+ arr);

}

removeFromArray([1,2,3,4],2);




/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr){
    odd_item=[];
    odd_item2=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            odd_item.push(arr[i]);
        }
    }
  console.log("oddArray using FOR");
  console.log(odd_item);


  let j=0;
  while(j<arr.length){
    if(arr[j]%2!=0){
        odd_item2.push(arr[j]);
    }
    j++;
}
console.log("oddArray using WHILE");
console.log(odd_item2);

  }



oddArray([1,2,4,3,5,8]);


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr){
sum1=0;
for(i=0;i<arr.length;i++){
    sum1=sum1+arr[i];
}
avg=sum1/arr.length;
console.log("the avarge using FOR is:   "+avg)

j=0;
sum2=0;
while(j<arr.length){
    sum2=sum2+arr[j]
    j++;
}
avg2=sum2/arr.length;
console.log("the avarge using WHILE is:   "+avg2)

}
aveArray([1,2,3,8,9,77]);



/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr){
    short=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i].length<short.length){
            short=arr[i];

        }
    }

    console.log("the shortest string  using FOR is  "+short);


    j=0;
    while(j<arr.length){
        if(arr[j].length<short.length){
            short=arr[j];
        }
        console.log("the shortest string  using WHILE is  "+short);
        j++;

    }

}

shorterInArray(["alex","mercer","madrasa","ali","emad","hala"])

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//str the string and char is the charcter that ineed to know number of repeat 
function repeatChar(str,char){
    repeat=0;
    repeat2=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i)==char){
            repeat=repeat+1;
        }
    }

    console.log(char+" repeat using FOR is:   "+repeat);

    j=0;
    while(j<str.length){
        if(str.charAt(j)==char){
            repeat2=repeat2+1;
        }
        j++;
    }
    console.log( char+" repeat using WHILE is:   "+repeat2);

}
repeatChar("alex mercer madrasa rashed2 emad hala","a");


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr){
    evenIndexOdd=[];
    evenIndexOdd2=[];
    for(i=0;i<arr.length;i++){
        if(arr[i].length%2!=0 && i%2==0){
            evenIndexOdd.push(arr[i]);

        }
    }

    console.log("the string with odd length in even index using FOR:  "+evenIndexOdd);
j=0;
    while(j<arr.length){
        if(arr[j].length%2!=0 && j%2==0){
            evenIndexOdd2.push(arr[j]);

        }
        j++;
    }
    console.log("the string with odd length in even index using WHILE:  "+evenIndexOdd2);
}

evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]);


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr){
    powerElement=[];
    powerElement2=[];

for(i=0;i<arr.length;i++){
    powerElement.push(Math.pow(arr[i],i));
}
console.log(" powerElementIndex  FOR: "+powerElement)
j=0;
while(j<arr.length){
    powerElement2.push(Math.pow(arr[j],j));
    j++;
}
console.log(" powerElementIndex  WHILE: "+powerElement2)
}
powerElementIndex([44, 5, 4, 3, 2, 10])

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr){
    evenIndexeven=[];
    evenIndexeven2=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0 && i%2==0){
            evenIndexeven.push(arr[i]);

        }
    }

    console.log("the string with odd length in even index using FOR:  "+evenIndexeven);
j=0;
    while(j<arr.length){
        if(arr[j]%2==0 && j%2==0){
            evenIndexeven2.push(arr[j]);

        }
        j++;
    }
    console.log("the string with odd length in even index using WHILE:  "+evenIndexeven2);
}

evenNumberEvenIndex( [5,2,2,1,8,66,55,77,34,9,55,1]);

/*

While Exercises 
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
function subtract(num){
    sub=num;
    let n=0;
    while(num>0){
        n=n+sub; 
        sub=1-num;
        num--;
    }
    return n;
   
}
console.log(subtract(4));

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(num){
    f=1;
    fn=num;
    while(fn>=1){
        f=f*fn;


        fn--;
    }
    console.log("the factorial for "+num+"="+f);

}

factorial(5);


/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(st,ind){
j=0;
str="";
while(j<ind-1){
str+=`${st} `
j++;
}
str+=`${st}`
return `"${str}"`;

}
console.log("the repeatStr:  "+repeatStr("to",6));

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sumBetween(n1,n2){
maxNum=Math.max(n1,n2);
minNum=Math.min(n1,n2);
sum=0;
while(maxNum>=minNum){

sum=sum+maxNum;

maxNum--;

}
console.log("the sumation from "+n1+" to "+n2+" ="+sum);
}
sumBetween(3,6);

/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(n1,n2,n3){
    p=Math.pow(n2,n3);

    mul=n1*p;

    return mul;

}

console.log("multiOf "+multiOf(4,10,3));
console.log("multiOf "+multiOf(6,3,2))

/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

function muti2(n1,n2){
    maxNum=Math.max(n1,n2);
    minNum=Math.min(n1,n2);
    mul=1;
    while(maxNum>=minNum){
    
        mul=mul*maxNum;
    
    maxNum--;
    
    }
    
    console.log("the multiplication from "+n1+" to "+n2+" ="+mul);
    
    }
    muti2(3,6);
/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(n1,n2){
j=n1+1;
str="";
while(j<n2-1){
str+=`${j}, `
j++;
}
str+=`${j}`
return `"${str}"`;

}
console.log("the numberBetweenUs:  "+numberBetweenUs(2,8));

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

function countDown(num){
j=num;
str="";
while(j>0){
str+=`${j}, `
j--;
}

str+="done"

return `"${str}"`;
}
console.log("the count down "+countDown(5));


//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues2(arr){
    let double_item=[];
    for(i=0;i<arr.length;i++){
     double_item.push(arr[i]*2);
    }
    return double_item;

   
}
console.log("double Values array")
console.log(doubleValues2([2,4,5,6,8]));


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues2(arr){
    even_item=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even_item.push(arr[i]);
        }
    }
    return even_item;
}
console.log("onlyEvenValues");
console.log(onlyEvenValues2([1,2,4,3,5,8]))


/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/

function showFirstAndLast2(arr){
    FirstAndLast=[];
    for(i=0;i<arr.length;i++){
        let cut=arr[i]
        let char1=cut.charAt(0);
        let charLast=cut.charAt(cut.length-1);
        let part=char1+charLast;

        FirstAndLast.push(part);
    }
    return FirstAndLast;
   
}
console.log(showFirstAndLast2(['colt','matt', 'tim', 'udemy']));


/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/

function addKeyAndValue(arr,key,val){
    let obj={};

    for(i=0;i<arr.length;i++){
        obj=arr[i];
       obj[key]=val;


    }

    return arr;

}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

function vowelCount(arr){
    vowel={};
    c=0;
    c1=0;
    c2=0;
    c3=0;
    c4=0;
    
    for(i=0;i<arr.length;i++){
        if(arr[i]=="i" ||arr[i]=="I"){
            c=c+1;
            vowel["i"]=c;
        }
        if(arr[i]=="a" ||arr[i]=="A"){
            c1=c1+1;
            vowel["a"]=c1;
            
            
        }
        if(arr[i]=="e" ||arr[i]=="E"){
            c2=c2+1;
            vowel["e"]=c2;
            
            
        }
        if(arr[i]=="o" ||arr[i]=="O"){
            c3=c3+1;
            vowel["o"]=c3;
            
            
        }
        if(arr[i]=="u" ||arr[i]=="U"){
            c4=c4+1;
            vowel["u"]=c4;
              
        }

    }

    return vowel;
   
}

console.log(vowelCount('I Am awesome and so are you'));

