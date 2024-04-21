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
}
function set_light_theme() {
    document.documentElement.style.setProperty("--text-color", "#232333");
    document.documentElement.style.setProperty("--background-color", "#fff");
    document.documentElement.style.setProperty("--outline-color", "#BCBEC0");
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