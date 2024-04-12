var color_picker = document.getElementById("color-picker");
var color_picker_wrapper = document.getElementById("color-picker-wrapper");


color_picker.addEventListener("input", function() {
    document.body.style.setProperty('--main-color',this.value)
    color_picker_wrapper.style.backgroundColor = color_picker.value;    
})

color_picker_wrapper.style.backgroundColor = color_picker.value;