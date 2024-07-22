const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Add form submission handling for registration and login
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  try {
    const response = await axios.post('http://localhost:3001/register', { username, password, role: 'user' });
    alert('Registration successful!');
  } catch (error) {
    alert('Registration failed: ' + error.response.data.message);
  }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await axios.post('http://localhost:3001/login', { username, password });
    localStorage.setItem('token', response.data.token);
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to the protected page
  } catch (error) {
    alert('Login failed: ' + error.response.data.message);
  }
});
