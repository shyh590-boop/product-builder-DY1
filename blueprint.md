# Dytech-Week1 ERP System

## Overview

A web-based ERP (Enterprise Resource Planning) system for Dytech. This project will be built incrementally, starting with a login page and progressively adding more ERP features.

## Features

*   **User Authentication:** Secure login using Firebase Authentication.
*   **Modular Design:** Using Web Components for a scalable and maintainable architecture.
*   **Modern UI/UX:** A clean, intuitive, and responsive user interface.
*   **Dashboard:** Central hub for viewing key metrics and navigating the ERP system.

## Project Structure

```
dytech-week1/
├── index.html          # Login page
├── dashboard.html      # Main dashboard page
├── style.css           # All styles
├── firebase-config.js  # Firebase configuration
├── firebase-auth.js    # Login authentication logic
├── dashboard.js        # Dashboard logic (auth check, logout)
└── blueprint.md        # This file
```

## Completed Features

### Phase 1: Login Page (Completed)
1.  **`blueprint.md`**: Create and maintain this blueprint file.
2.  **`index.html`**: Login page with username/password form.
3.  **`style.css`**: Professional and modern styling.
4.  **Firebase Integration**: Set up Firebase Authentication.

### Phase 2: Dashboard (Completed)
1.  **`dashboard.html`**: Dashboard with sidebar navigation and stats cards.
2.  **`dashboard.js`**: Authentication state checking and logout functionality.
3.  **Auth Protection**: Redirect unauthenticated users to login page.
4.  **User Info Display**: Show logged-in user's name and email.
5.  **Sidebar Navigation**: Menu for Dashboard, Inventory, Orders, Reports, Settings.
6.  **Stats Cards**: Quick view cards for Orders, Inventory, Tasks, Revenue.

## Pending Tasks

*   **Firebase Configuration**: Add actual Firebase project credentials to `firebase-config.js`.
*   **Enable Email/Password Auth**: Enable in Firebase Console > Authentication > Sign-in method.
*   **Create Test User**: Add a test user in Firebase Console > Authentication > Users.

## Next Steps

*   Implement actual functionality for sidebar menu items (Inventory, Orders, etc.).
*   Connect to Firebase Firestore for data storage.
*   Add more detailed reporting features.
*   Implement user management and roles.

## Firebase Setup Instructions

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (e.g., "dytech-erp")
3. Add a web app to the project
4. Copy the `firebaseConfig` object to `firebase-config.js`
5. Go to Authentication > Sign-in method > Enable Email/Password
6. Go to Authentication > Users > Add user (for testing)
