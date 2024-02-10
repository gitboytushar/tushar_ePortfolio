// toggle to change the webpage's theme
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('checkbox');
    var lightTheme = document.getElementById('lightTheme');
    var darkTheme = document.getElementById('darkTheme');

    // Initially, enable the light theme and disable the dark theme
    lightTheme.disabled = false;
    darkTheme.disabled = true;

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            lightTheme.disabled = true;
            darkTheme.disabled = false;
        } else {
            lightTheme.disabled = false;
            darkTheme.disabled = true;
        }
    });
});

