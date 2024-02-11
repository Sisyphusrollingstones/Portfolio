document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo(0, targetSection.offsetTop);
        });
    });
});

// Function to toggle dark/light mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Set the button text based on dark mode
    const button = document.getElementById('toggleMode');
    button.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Set the button background color based on dark mode
    button.style.backgroundColor = isDarkMode ? '#ddd' : '#2b2d42'; // Dark mode: light gray, Light mode: dark gray

    // Set the CSS variables based on dark mode
    if (isDarkMode) {
        document.documentElement.style.setProperty('--bg-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#333');
    }
}

// Check for user's dark mode preference in localStorage
const storedDarkMode = localStorage.getItem('darkMode');

// If the user has a preference, apply it
if (storedDarkMode) {
    document.body.classList.toggle('dark-mode', storedDarkMode === 'true');

    // Set the initial button text based on dark mode
    const button = document.getElementById('toggleMode');
    button.textContent = storedDarkMode === 'true' ? 'Light Mode' : 'Dark Mode';

    // Set the initial button background color based on dark mode
    button.style.backgroundColor = storedDarkMode === 'true' ? '#ddd' : '#333'; // Dark mode: light gray, Light mode: dark gray

    // Set the initial CSS variables based on dark mode
    if (storedDarkMode === 'true') {
        document.documentElement.style.setProperty('--bg-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#fff');
        document.documentElement.style.setProperty('--text-color', '#333');
    }
}

// Add a click event listener to the button
document.getElementById('toggleMode').addEventListener('click', toggleDarkMode);





