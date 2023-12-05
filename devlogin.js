// login.js

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check username and password
    if ((username === 'Olibe9' && password === 'Redlands@2023!') ||
        (username === 'epicchill_Day' && password === 'Callum2023!')
        (username === 'KianDev' && password === 'Ilovedev07!')
        ) {
      // Redirect to development.html upon successful login
      window.location.href = 'development.html';
    } else {
      // Display error message for incorrect login
      document.getElementById('loginError').innerHTML = 'Incorrect username or password';
    }
  }
  