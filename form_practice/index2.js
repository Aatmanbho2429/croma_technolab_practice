// Add event listener to form submit event
$('form').submit(function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input fields
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const email = $('#email');
    const phone = $('#phone');
  
    // Validate first name
    if (firstName.val().trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'First name is required!'
      });
      firstName.focus();
      return false;
    }
  
    // Validate last name
    if (lastName.val().trim() === '') {
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
    if (email.val().trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is required!'
      });
      email.focus();
      return false;
    } else if (!emailRegex.test(email.val().trim())) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a valid email address!'
      });
      email.focus();
      return false;
    }
  
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (phone.val().trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Phone number is required!'
      });
      phone.focus();
      return false;
    } else if (!phoneRegex.test(phone.val().trim())) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please provide a valid 10 digit phone number!'
      });
      phone.focus();
      return false;
    }
  
    // If all input fields are valid, submit the form
    this.submit();
  });
  