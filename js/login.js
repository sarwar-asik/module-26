// step-1///////
document.getElementById("btn-submit").addEventListener('click',function(){
// step-2 get the email inside///
const emailField = document.getElementById('user-email')
const email =emailField.value;
/// always use value for get value from input////

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
//step-4 ... dont do it !!///
if(email==='asik@gmail.com' && password === 'secret'){
    console.log('Valid User')
}
else{
    alert('Invalid user')
}
})