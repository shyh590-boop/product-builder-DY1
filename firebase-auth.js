// firebase-auth.js
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.username.value; // Assuming username is the email
        const password = loginForm.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('Login successful for user:', user.email);
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login failed:', errorCode, errorMessage);
                alert(`Login failed: ${errorMessage}`);
            });
    });
}