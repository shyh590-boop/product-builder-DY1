// signup.js
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const confirmPassword = signupForm['confirm-password'].value;

        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Create user with email and password
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;

                // Update user profile with name
                return user.updateProfile({
                    displayName: name
                });
            })
            .then(() => {
                console.log('Account created successfully');
                alert('Account created successfully! Redirecting to dashboard...');
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Signup failed:', errorCode, errorMessage);

                // User-friendly error messages
                let message = errorMessage;
                if (errorCode === 'auth/email-already-in-use') {
                    message = 'This email is already registered. Please login instead.';
                } else if (errorCode === 'auth/weak-password') {
                    message = 'Password is too weak. Please use at least 6 characters.';
                } else if (errorCode === 'auth/invalid-email') {
                    message = 'Invalid email address.';
                }

                alert(`Signup failed: ${message}`);
            });
    });
}
