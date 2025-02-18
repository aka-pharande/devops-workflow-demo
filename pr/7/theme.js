// Get the button and body element
const themeToggleButton = document.getElementById('themeToggleButton');
const bodyElement = document.body;
const lightThemeLink = document.getElementById('light-theme-css');
const darkThemeLink = document.getElementById('dark-theme-css');

// Toggle function for switching themes
themeToggleButton.addEventListener('click', () => {
    // If the body has the light theme, switch to dark theme
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        lightThemeLink.disabled = true;
        darkThemeLink.disabled = false;
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        // If the body has the dark theme, switch to light theme
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        lightThemeLink.disabled = false;
        darkThemeLink.disabled = true;
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});
