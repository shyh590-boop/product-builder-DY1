// dashboard.js
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        console.log('User is logged in:', user.email);
        displayUserInfo(user);
    } else {
        // User is not signed in, redirect to login
        console.log('User is not logged in, redirecting to login...');
        window.location.href = 'index.html';
    }
});

// Display user information
function displayUserInfo(user) {
    const userEmailElement = document.getElementById('user-email');
    const userNameElement = document.getElementById('user-name');

    if (userEmailElement) {
        userEmailElement.textContent = user.email;
    }
    if (userNameElement) {
        userNameElement.textContent = user.displayName || user.email.split('@')[0];
    }
}

// Logout function
function logout() {
    auth.signOut()
        .then(() => {
            console.log('User signed out successfully');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Sign out error:', error);
            alert('Logout failed. Please try again.');
        });
}
