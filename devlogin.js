// login.js

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check username and password
    if ((username === 'Olibe9' && password === '7878') ||
        (username === 'epicchill_Day' && password === '9898')) {
      // Redirect to development.html upon successful login
      window.location.href = 'development.html';
    } else {
      // Display error message for incorrect login
      document.getElementById('loginError').innerHTML = 'Incorrect username or password';
    }
  }
  