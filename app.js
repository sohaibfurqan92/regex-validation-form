// Blur Event Listeners
document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(){
  const name = document.getElementById('name');
  let re = /^[a-zA-Z]{2,10}$/; //starting and ending with any lowercase or uppercase alphabets between 2 and 10 characters

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else{
    name.classList.remove('is-invalid');

  }
}

function validateEmail(){

}

function validateZip(){

}

function validatePhone(){

}