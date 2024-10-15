    /*   

      
      Author: Noah Yarosz
      Date: 10/9/24

      Filename: validationScript.js
      File purpose: Validates if input is either alphanumeric or not, if not you get an error, if it is it submits and send the alert that it is valid. 
*/ 
    // JavaScript code for form validation
    
    let myForm = document.getElementById('myForm');
	  // Prevent form from submitting 
    myForm.addEventListener('submit', function(e) {
    
      e.preventDefault(); 
    
    
      // Retrieve the input field value
      let inputField = document.getElementById('inputField');
      let inputString = inputField.value;
      

      // Regular expression pattern for alphanumeric input
      let Regex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (Regex.test(inputString)) {
        // Valid input: display confirmation and submit the form
        alert('Input is valid');
        myForm.submit();
      }
        // Invalid input: display error message
      else {
        alert('Error: Invalid format! use alphanumeric input');
      }
  });