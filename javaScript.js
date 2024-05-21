// function to set a given theme/color-scheme
//  function setTheme(themeName) {
//     localStorage.setItem('theme', themeName);
//     document.documentElement.className = themeName;
// }

// function to toggle between light and dark theme

let isDarkTheme = false;

function toggleTheme() {
    document.documentElement.removeAttribute('theme'); 
    if(isDarkTheme) {
        document.documentElement.setAttribute('theme', '');
    }
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
    isDarkTheme = !isDarkTheme;
}


// Immediately invoked function to set the theme on initial load
// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//       document.getElementById('slider').checked = true;
//     }
// })();