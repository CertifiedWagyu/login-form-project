document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let valid = true;

  if (!username) {
    document.getElementById('usernameError').textContent = 'Username is required.';
    valid = false;
  } else {
    document.getElementById('usernameError').textContent = '';
  }

  if (!password) {
    document.getElementById('passwordError').textContent = 'Password is required.';
    valid = false;
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  const successMsg = document.getElementById('successMsg');
  if (valid) {
    successMsg.textContent = 'Login successful!';
  } else {
    successMsg.textContent = '';
  }
});