const togglePassword = document.querySelector("#togglePassword");
const togglePassword2 = document.querySelector("#togglePassword");
const password = document.getElementById("exampleInputPassword1");
const email=document.getElementById("exampleInputEmail1");
const phone=document.getElementById("mobile");
const check=document.getElementById("exampleCheck1");
const check2=document.getElementById("exampleCheck2");
var mailValue="";
var phoneValue="";
var passValue="";

var mailbool=false;
var phonebool=false;
var passbool=false;

const form=document.getElementById("form-reg");

togglePassword.addEventListener("click", function () {
   
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    

    this.classList.toggle("bi-eye");
});



function validationForm(event){
    event.preventDefault();
    if (email.value == null || email.value == "") {
        document.getElementById("emailErr").textContent="The email field is required."
      } else if (
        !email.value.match(
            /^\S+@\S+\.\S+$/
        )
      ) {
        document.getElementById("emailErr").textContent =
          "The email must be a valid email address.";
        
      } else {
        
       mailValue=email.value;
        document.getElementById("emailErr").textContent ="";
        mailbool=true;
      }
      if (phone.value == "" || phone.value == null) {
        document.getElementById("mobileErr").textContent =
          "The Mobile field is required.";
        
      } else if(phone.value[2]==9||phone.value[2]==8){
        document.getElementById("mobileErr").textContent =
        "The mobile must be orange.";

      }
      else if (phone.value.length !== 10) {
        document.getElementById("mobileErr").textContent =
          "The mobile must be 10 characters.";
        
      } else {
        phoneValue=phone.value;
        document.getElementById("mobileErr").textContent = "";
        phonebool=true;
      }
  
      if (password.value == '' || password.value == null) {
        document.getElementById("passErr").textContent = "The password field is required.";
        
      }else if(password.value.length <6 ){
        document.getElementById("passErr").textContent = "The password must be at least 6 characters.";
        
      }else if(password.value.length >18){
        document.getElementById("passErr").textContent = "The password may not be greater than 18 characters.";
        
      }else{
       
        passValue=password.value;
        document.getElementById("passErr").textContent = "";
        passbool=true;
      }

if(check.checked==false){
    document.getElementById("checkErr").textContent = "you should check";
}else{
    document.getElementById("checkErr").textContent = "";
}


     if(mailbool==true&&phonebool==true&&passbool==true){
      let formData = JSON.parse(localStorage.getItem('formData')) || [];
      formData.push({ mailValue, phoneValue, passValue});
      localStorage.setItem('formData', JSON.stringify(formData));
     }


}



const passwordIN = document.getElementById("passSignIN");
const emailIN=document.getElementById("EmailSignIN");
var mailValueIN="";
var passValueIN="";
var mailIN=false;
var passIN=false;

togglePassword2.addEventListener("click", function () {
   
  const type = passwordIN.getAttribute("type") === "password" ? "text" : "password";
  passwordIN.setAttribute("type", type);
  

  this.classList.toggle("bi-eye");
});

  function validationData(event){
    event.preventDefault();
    if (emailIN.value == null || emailIN.value == "") {
        document.getElementById("emailErr").textContent="The email field is required."
      } else if (
        !emailIN.value.match(
            /^\S+@\S+\.\S+$/
        )
      ) {
        document.getElementById("emailErr").textContent =
          "The email must be a valid email address.";
        
      } else {
        
        mailValueIN=emailIN.value;
        document.getElementById("emailErr").textContent ="";
        mailIN=true;
      }
      
  
      if (passwordIN.value == '' || passwordIN.value == null) {
        document.getElementById("passErr").textContent = "The password field is required.";
        
      }else if(passwordIN.value.length <6 ){
        document.getElementById("passErr").textContent = "The password must be at least 6 characters.";
        
      }else if(passwordIN.value.length >18){
        document.getElementById("passErr").textContent = "The password may not be greater than 18 characters.";
        
      }else{
       
        passValueIN=passwordIN.value;
        document.getElementById("passErr").textContent = "";
        passIN=true;
      }

     

      data = JSON.parse(localStorage.getItem("formData") || "[]");

      inputmail="";
      inputpass="";
      obj={};
      for(i=0;i<data.length;i++){
        obj=data[i];
        inputmail=obj.mailValue;
        inputpass=obj.passValue;
   

        if(mailValueIN !==inputmail && passValueIN!==inputpass ){
         console.log("nooo") ;
        }
        else{
        window.sessionStorage.setItem("mailValue",inputmail);
        
        console.log(sessionStorage)
          window.open('valid.html');

        
          //console.log("yes")
          break;
        }
      
      
      }



}




