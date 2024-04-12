var color_picker = document.getElementById("color-picker");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");

function set_color(color) {
    document.body.style.setProperty("--main-color", color);
    localStorage.setItem("mainColor", color);
    color_picker.value = color
    color_picker_wrapper.style.backgroundColor = color; 
}

document.addEventListener("DOMContentLoaded", function() {
    const storedColor = localStorage.getItem("mainColor");

    if (storedColor) {
        set_color(storedColor);
    } else {
        const defaultColor = "#ff5e00";
        set_color(defaultColor);
    }
});

color_picker.addEventListener("input", function() {
    set_color(this.value);
})
