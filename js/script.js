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

// var dark_theme_button = document.getElementById("dark-theme")