// step-1///////
document.getElementById("btn-submit").addEventListener('click',function(){
// step-2 get the email inside///
const emailField = document.getElementById('user-email')
const email =emailField.value;
/// always use value for get value from input////

const passwordField = document.getElementById('user-password');
const password = passwordField.value;
//step-4 ... dont do it !!///
const lastcharac = email.slice(10)

if(lastcharac === '@gmail.com' || typeof password === 'number'){
   window.location.href = 'bank.html'
}
else{
    alert('Invalid user. Please write correct Email and Password')
}
passwordField.value = ''
})