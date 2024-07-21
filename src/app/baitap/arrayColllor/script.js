document.getElementById('colorSelector').addEventListener('change', function() {
    // Get the selected color
    const selectedColor = this.value;
    // Change the background color of the body
    document.body.style.backgroundColor = selectedColor;
});
