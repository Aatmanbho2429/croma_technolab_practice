// Get the form and input fields
const form = document.getElementById('myForm');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// function showResult() {
//   const fname = document.getElementById('firstName').value;
//   const lname = document.getElementById('lastName').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   console.log(fname);
//   document.getElementById("fName").innerHTML = "Your Fname is " +fname;
//   document.getElementById("lName").innerHTML = "Your Lname is " +lname;
//   document.getElementById("Email").innerHTML = "Your Email is " +email;
//   document.getElementById("Pn").innerHTML = "Your number is " +phone;
// }
// Add event listener to form submit event
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Validate first name
  if (firstName.value.trim() === '') {
    // alert('First name is required!');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First name is required!'
      });
    firstName.focus();
    return false;
  }

  // Validate last name
  if (lastName.value.trim() === '') {
    // alert('Last name is required!');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Last name is required!'
      });
    lastName.focus();
    return false;
  }

  // Validate email
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.value.trim() === '') {
    // alert('Email is required!');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is required!'
      });
    email.focus();
    return false;
  } else if (!emailRegex.test(email.value.trim())) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a valid email address!'
      });
    // alert('Please provide a valid email address!');
    email.focus();
    return false;
  }

  // Validate phone number
  const phoneRegex = /^\d{10}$/;
  if (phone.value.trim() === '') {
    // alert('Phone number is required!');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phone number is required!'
      });
    phone.focus();
    return false;
  } else if (!phoneRegex.test(phone.value.trim())) {
    // alert('Please provide a valid 10 digit phone number!');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a valid 10 digit phone number!'
      });
    phone.focus();
    return false;
  }

  // If all input fields are valid, submit the form
  form.submit();
});
