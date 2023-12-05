// login.js
function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Define valid usernames and passwords
    const validCredentials = {
      'Olibe9': 'Redlands@2023!',
      'Callum': 'Test1234',
      'KianCareer': 'Ilovedev07!'
    };
  
    // Check if the entered credentials are valid
    if (validCredentials[username] && validCredentials[username] === password) {
      // Redirect to the database page upon successful login
      window.location.href = 'database.html';
    } else {
      errorMessage.textContent = 'Invalid username or password. Please try again. If you wish to reset your password please open a Management Ticket';
    }
  }
  