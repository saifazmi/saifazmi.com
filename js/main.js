window.onload = loadTheme;

// Initial theme loader
function loadTheme() {
    var styleSheet = localStorage.getItem('theme');
    if (styleSheet !== undefined) {
        setTheme(styleSheet);
        if (styleSheet.indexOf('css/light.css') >= 0) {
            document.getElementById('switch').setAttribute('checked', true);
        }
    } else {
        storeStyleSheet('theme', document.getElementById('theme').getAttribute('href'));
    }
}

// Theme switcher
function switchTheme() {
    var current_theme = document.getElementById('theme').getAttribute('href');
    if (current_theme.indexOf('dark.css') >= 0) {
        setTheme('css/light.css');
        storeStyleSheet('theme', 'css/light.css');
    } else {
        setTheme('css/dark.css');
        storeStyleSheet('theme', 'css/dark.css');
    }
}

// Updates the current theme
function setTheme(styleSheet) {
    document.getElementById('theme').setAttribute('href', styleSheet);
}

// Stores the given stylesheet name in local storage
function storeStyleSheet(styleSheetKey, StyleSheetName) {
    localStorage.setItem(styleSheetKey, StyleSheetName);
}

// Toggle mobile menu icon
function switchMenuIcon() {
    var menuIcon = document.getElementsByClassName('show-menu')[0].firstChild;
    var menuState = document.getElementById('show-menu').checked;

    if (menuState === true) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}
