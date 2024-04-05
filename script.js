// Toggle navigation menu on smaller screens
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('active');
});

// making register and logout button alter
const registerLink = document.querySelector('.register-link');
const logoutBtn = document.querySelector('.logout-btn');

let isLoggedIn = false;

registerLink.addEventListener('click', () => {
  isLoggedIn = true;
  registerLink.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
});

logoutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  registerLink.style.display = 'inline-block';
  logoutBtn.style.display = 'none';
});