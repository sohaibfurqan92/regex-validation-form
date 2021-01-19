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
  const email = document.getElementById('email');
  
  //something@something.com - TLD 2 to 5 chars
  let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(\w{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else{
    email.classList.remove('is-invalid');

  }
}

function validateZip(){
  const zip = document.getElementById('zip');
  
  //five digit zip code with and optional dash and 4 digits e.g. 55555-4444 or 55555
  let re = /^\d{5}(-\d{4})?$/; //OR re=/^[0-9]{5}(-[0-9]{4})?$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else{
    zip.classList.remove('is-invalid');

  }
}

function validatePhone(){

}