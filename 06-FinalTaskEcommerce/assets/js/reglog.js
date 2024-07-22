const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  try {
    await axios.post('http://localhost:3001/register', { username, password, role: 'user' });
    alert('Registration successful!');
  } catch (error) {
    console.error('Registration error:', error); // Log error details
    alert('Registration failed: ' + (error.response?.data?.message || error.message));
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
    console.error('Login error:', error); // Log error details
    alert('Login failed: ' + (error.response?.data?.message || error.message));
  }
});
