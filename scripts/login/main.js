document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const credentials = {
    email: document.getElementById('username').value,
    password: document.getElementById('password').value
  };
  console.log(credentials);
});