// * Exercise 1: 
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Case:
// *    Test Case 1: doubleValues([1,2,3]) 
// *    Test Case 2: doubleValues([5,1,2,3,10])  
// *
// * Result: 
// * Test Case 1:  [2,4,6]
// * Test Case 2: [10,2,4,6,20]

function doubleVal(numArr){

const doubleValues=[];
numArr.forEach(item=>{

  doubleValues.push(item*2);

 

})
return doubleValues
}
console.log("the array after doubleValues ")
console.log(doubleVal([2,3,7,9]));


//-------------------------------------------------------------------------------------------------
// * Exercise 2:
// * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// *
// * Test Cases:
// *   onlyEvenValues([1,2,3]) 
// *   onlyEvenValues([5,1,2,3,10]) 
// * 
// * Result:
// *  Test Case 1:  [2]
// *  Test Case 2: [2,10]
// */


function onlyEvenValues(arr){
  EvenValues =[];
  arr.forEach(item=>{
    if(item%2==0){
      EvenValues.push(item);
    }
  })
  return EvenValues;

}
console.log(onlyEvenValues([5,6,3,1,4,8]));

//---------------------------------------------------------------

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
function showFirstAndLast(arr){

    FirstAndLast=[];
arr.forEach(item=>{
    let char1=item.charAt(0);
    let charLast=item.charAt(item.length-1);
    let part=char1+charLast;
    FirstAndLast.push(part);
})
return FirstAndLast;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
//------------------------------------------------------------------------------------
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
function addKeyAndValue(arr,key,value){
  let obj={};

 
  arr.forEach(item=>{
    obj=item;
    obj[key]=value

  })
  return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
//------------------------------------------------------------------------------------------------------------------
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

function vowelCount(str){
const myArray =str.split("");
console.log(myArray);

  vowel={};
    c=0;
    c1=0;
    c2=0;
    c3=0;
    c4=0;
    
    myArray.forEach(item=>{
        if(item=="i" ||item=="I"){
            c=c+1;
            vowel["i"]=c;
        }
        if(item=="a" ||item=="A"){
            c1=c1+1;
            vowel["a"]=c1;
            
            
        }
        if(item=="e" ||item=="E"){
            c2=c2+1;
            vowel["e"]=c2;
            
            
        }
        if(item=="o" ||item=="O"){
            c3=c3+1;
            vowel["o"]=c3;
            
            
        }
        if(item=="u" ||item=="U"){
            c4=c4+1;
            vowel["u"]=c4;
              
        }
      })
      return vowel;
    }


    console.log(vowelCount('I Am awesome and so are you'));


