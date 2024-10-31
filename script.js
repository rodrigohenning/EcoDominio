// DOM Elements
const loginForm = document.getElementById('loginForm');
const familyForm = document.getElementById('familyForm');
const complaintForm = document.getElementById('complaintForm');

// Simple authentication check
let isAuthenticated = false;
let userRole = null;

// Login handler
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate authentication (replace with real backend auth)
    if (username && password) {
      isAuthenticated = true;
      userRole = username === 'admin' ? 'admin' : 'user';
      window.location.href = '/dashboard.html';
    }
  });
}

// Family registration handler
if (familyForm) {
  familyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(familyForm);
    // Here you would normally send this data to a backend
    console.log('Family data submitted:', Object.fromEntries(formData));
    alert('Família cadastrada com sucesso!');
  });
}

// Complaint submission handler
if (complaintForm) {
  complaintForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(complaintForm);
    // Here you would normally send this data to a backend
    console.log('Complaint submitted:', Object.fromEntries(formData));
    alert('Reclamação enviada com sucesso!');
  });
}

// Check authentication status
function checkAuth() {
  if (!isAuthenticated && !window.location.pathname.includes('index.html')) {
    window.location.href = '/web/index.html';
  }
}

// Initialize tooltips and other UI elements
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
});