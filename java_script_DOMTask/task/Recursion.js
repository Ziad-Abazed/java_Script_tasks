// Set
// window.localStorage.setItem("color", "#F00");
// console.log(window.localStorage.getItem("color"));

// Set Color In Page
//document.body.style.backgroundColor = window.localStorage.getItem("color");

//    window.sessionStorage.setItem("c", "#F00");
//   console.log(window.sessionStorage.getItem("c"));

// console.log(window.localStorage);
// console.log(typeof window.localStorage);


// AJAX
//   - Asynchronous JavaScript And XML
//   - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
//   - It Use "XMLHttpRequest" Object To Interact With The Server
//   - You Can Fetch Data Or Send Data Without Page Refresh
//   - Examples

//   --- Google Drive
//   --- Upload Article Photo
//   --- Form Check Name

//   Test new XMLHttpRequest();
//   Request And Response
//   Status Code
// */


function factorial (n){
  var res=1;
  if(n==0){
    n=1;
  }
  else{
    res= n*factorial(n-1);
  }
  return res;
}

console.log(factorial(5));


//------------------------------------------------------------------


function sum (n){
  var res=0;
  if(n==0){
    n=1;
  }
  else{
    res= n+sum(n-1);
  }
  return res;
}

console.log(sum(5));


function sumbetween (n1,n2){
  var res=0;
  if(n1<=n2){
    res= n1+sumbetween(n1+1,n2);
  }
 
  return res;
}

console.log(sumbetween(5,9));

//--------------------------------------------------------------

function repeatStr(st,ind){
  str="";
  
if(ind>1){
  repeatStr(st,ind-1);
  str+=" ";
  str+=st;
}
else{
  str+=st
}
return `"${str}"`;
}
  
  console.log("the repeatStr:  "+repeatStr("to",4));

