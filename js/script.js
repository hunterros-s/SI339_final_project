// selection color, main color theme
function set_color(color) {
    document.documentElement.style.setProperty("--main-color", color);
    localStorage.setItem("mainColor", color);
}

window.addEventListener('DOMContentLoaded', () => {
    const storedColor = localStorage.getItem("mainColor");
    var color_picker = document.getElementById("color-picker");
    var color_picker_wrapper = document.getElementById("color-picker-wrapper");

    function update_color(color) {
        set_color(color)

        color_picker.value = color
        color_picker_wrapper.style.backgroundColor = color; 
    }

    update_color(storedColor)
    
    color_picker.addEventListener("input", function() {
        update_color(this.value);
    })
});

const storedColor = localStorage.getItem("mainColor");
if (storedColor) {
    set_color(storedColor);
} else {
    const defaultColor = "#ff5e00";
    set_color(defaultColor);
}

// dark theme
function set_dark_theme() {
    document.documentElement.style.setProperty("--text-color", "#fff");
    document.documentElement.style.setProperty("--background-color", "#1f1f21");
    document.documentElement.style.setProperty("--outline-color", "#2d2d2d");
    document.documentElement.style.setProperty("--time-color", "#c7c7c7");

    // Set CSS variables for the dark theme
    document.documentElement.style.setProperty("--background-code", "#2f3036");
    document.documentElement.style.setProperty("--color-built-in", "#8be9fd");
    document.documentElement.style.setProperty("--color-keyword", "#ff79c6");
    document.documentElement.style.setProperty("--color-text", "#f8f8f2");
    document.documentElement.style.setProperty("--color-italic", "#50fa7b");
    document.documentElement.style.setProperty("--color-string", "#f1fa8c");
    document.documentElement.style.setProperty("--color-number", "#bd93f9");
    document.documentElement.style.setProperty("--color-comment", "#acc0ff");
}

// light theme
function set_light_theme() {
    document.documentElement.style.setProperty("--text-color", "#232333");
    document.documentElement.style.setProperty("--background-color", "#fff");
    document.documentElement.style.setProperty("--outline-color", "#f1f1f1");
    document.documentElement.style.setProperty("--time-color", "#757575");

    // Set CSS variables for the light theme
    document.documentElement.style.setProperty("--background-code", "#fefefe");
    document.documentElement.style.setProperty("--color-built-in", "#008089");
    document.documentElement.style.setProperty("--color-keyword", "#7928a1");
    document.documentElement.style.setProperty("--color-text", "#545454");
    document.documentElement.style.setProperty("--color-italic", "#007faa");
    document.documentElement.style.setProperty("--color-string", "#008000");
    document.documentElement.style.setProperty("--color-number", "#aa5d00");
    document.documentElement.style.setProperty("--color-comment", "#696969");
}

const theme_enabled = localStorage.getItem("darkTheme");
var enabled;
if (theme_enabled == "true") {
    enabled = true;
} else {
    enabled = false;
}
var checked;
if (enabled) {
    set_dark_theme()
    checked = true;
} else {
    set_light_theme()
    checked = false;
}

window.addEventListener('DOMContentLoaded', () => {
    var dark_theme_checker = document.getElementById("dark-theme")

    dark_theme_checker.addEventListener("input", function() {
        var checked = this.checked
        localStorage.setItem("darkTheme", checked);

        if (checked) {
            set_dark_theme()
        } else {
            set_light_theme()
        }
    })

    dark_theme_checker.checked = checked
});