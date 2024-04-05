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

// callingBtn = document.getElementsByClassName("calling-btn");
    document.getElementsByClassName("calling-btn").onclick = function () {
        window.location = "interaction.html";
    };




// Handle video stream
const userVideo = document.getElementById('user-video');
const partnerVideo = document.getElementById('partner-video');

// Get user's video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    userVideo.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing video stream:', error);
  });


// Handle video calling controls
const cancelBtn = document.querySelector('.cancel-btn');
const chatOnlyBtn = document.querySelector('.chat-only-btn');
const newCallBtn = document.querySelector('.new-call-btn');

cancelBtn.addEventListener('click', handleCancel);
chatOnlyBtn.addEventListener('click', handleChatOnly);
newCallBtn.addEventListener('click', handleNewCall);

function handleCancel() {
  console.log('Cancel button clicked');
}

function handleChatOnly() {
  console.log('Chat Only button clicked');
}

function handleNewCall() {
  console.log('New Call button clicked');
}