function userNameInput () {
    var firstName = document.getElementById('firstName').value;
    var threeMonthGoal = document.getElementById('threeDrinks').value;
    var result = document.getElementById('result');
  
    if (firstName.length < 3) {
         result.textContent = 'Name must contain at least 3 characters';
         //alert('Username must contain at least 3 characters');
     } else {
         result.textContent = 'Your name is: ' + firstName + ' and your 3 drinks are ' + threeMonthGoal;
         //alert(nameField);
     }
  }
  
  submitButton.addEventListener('click', userNameInput, false);
  