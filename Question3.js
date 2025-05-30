const loginBtn = document.getElementById('loginBtn');
const statusDiv = document.getElementById('status');

function simulateLogin() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Welcome back!');
    }, 2000);
  });
}

loginBtn.addEventListener('click', () => {
  statusDiv.textContent = 'Logging in...';
  simulateLogin().then(message => {
    statusDiv.textContent = message;
  });
});
