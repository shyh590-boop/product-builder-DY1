# Lotto Number Generator

## Overview

A simple web application to generate random lottery numbers.

## Features

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Web Component:** Uses a custom element (`<lotto-numbers>`) to display the generated numbers.
*   **Modern UI:** A clean and responsive user interface.

## Current Request: Create a Lotto Number Drawing Site

### Plan

1.  **`index.html`**: Create the main HTML structure with a title, a button to trigger number generation, and a container for the lotto numbers.
2.  **`style.css`**: Style the page with a modern, card-based design. This includes styling the button and the display area for the numbers.
3.  **`main.js`**: Implement the logic for generating the lotto numbers. This will be done using a Web Component (`<lotto-numbers>`) for modularity. The component will generate 6 unique random numbers from 1 to 45 and display them. An event listener will be added to the button to re-generate the numbers when clicked.
