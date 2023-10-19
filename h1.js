const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

 form.addEventListener('submit',(e)=>{

if(!validateInput()){
    e.preventDefault()
}
 })


function validateInput(){
const usernameVal=username.value.trim()
const emailVal=email.value.trim()
const passwordVal=password.value.trim()
const cpasswordVal=cpassword.value.trim()
let correct=true
if(usernameVal===""){
correct=false
    setError(username,"Username is required")
}
else{
    setSuccess(username)
} if(emailVal==''){
    correct=false
    setError(email,'Email is required')
}
else if(!validateEmail(emailVal)){
    correct=false
    setError(email,'Enter a valid email')
}
else{
    setSuccess(email)
}
if(passwordVal===""){
    correct=false
    setError(password,"Password is required")
}else if(passwordVal.length<8){
setError(password,"Must have atleast 8 characters")
}
else 
setSuccess(password)
if(cpasswordVal===""){
    correct=false
    setError(cpassword,"Confirm password is required")
}
else if(cpasswordVal!==passwordVal){
    correct=false
setError(cpassword,"password does not match")
}
else setSuccess(cpassword)
return correct
}

function setError(element,message){
let inputGroup=element.parentElement
let errorElement=inputGroup.querySelector('.error')

errorElement.innerText=message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')
}
function setSuccess(element){
    let inputGroup=element.parentElement
    let errorElement=inputGroup.querySelector('.error')
    
    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };