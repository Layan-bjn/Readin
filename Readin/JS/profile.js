/*
    File: profile.js
    Project: Readin
    Description: JavaScript functionality for the Profile page of the Readin platform.
                 Handles editing user info (name & email), displaying success messages,
                 toggling the edit form visibility, and updating the profile picture dynamically.
    Author: teammate
*/

// Toggle the visibility of the edit form
function toggleEditForm() {
  const form = document.getElementById('edit-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Save changes to name and email
function saveChanges() {
  const name = document.getElementById('edit-name').value;
  const email = document.getElementById('edit-email').value;
  const nameDisplay = document.querySelector('.username');
  const emailDisplay = document.querySelector('.email');
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Simple email validation pattern

  // Validate email format
  if (email && !emailPattern.test(email)) {
    alert('Invalid email, try again');
    return;
  }

  // Update displayed values if provided
  if (name) nameDisplay.textContent = name;
  if (email) emailDisplay.textContent = email;

  // Hide edit form and show success message
  document.getElementById('edit-form').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';

  // Hide success message after 2.5 seconds
  setTimeout(() => {
    document.getElementById('successMessage').style.display = 'none';
  }, 2500);
}

// Change profile picture dynamically
document.getElementById('avatarUpload').addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('avatar').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
