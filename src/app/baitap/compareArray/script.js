function arraysAreEqual(arr1, arr2) {
    const array1 = arr1.split(',').map(item => item.trim());
    const array2 = arr2.split(',').map(item => item.trim());
    
    return array1.length === array2.length &&
        array1.every((item, index) => item === array2[index]);
}

function compareArrays() {
    const array1Text = document.getElementById('array1').value;
    const array2Text = document.getElementById('array2').value;
    const resultDiv = document.getElementById('result');

    if (arraysAreEqual(array1Text, array2Text)) {
        resultDiv.textContent = "Arrays are equal!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Arrays are not equal.";
        resultDiv.style.color = "red";
    }
}
