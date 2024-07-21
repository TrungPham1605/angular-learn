function hasInvalidValues(obj) {
    const parsedObject = JSON.parse(obj);

    return Object.values(parsedObject).some(value => value === null || value === undefined || Number.isNaN(value));
}

function checkObjectValues() {
    const objectInput = document.getElementById('objectInput').value;
    const resultDiv = document.getElementById('result');

    try {
        if (hasInvalidValues(objectInput)) {
            resultDiv.textContent = "Object contains invalid values (null, undefined, NaN).";
            resultDiv.style.color = "red";
        } else {
            resultDiv.textContent = "All values are valid.";
            resultDiv.style.color = "green";
        }
    } catch (e) {
        resultDiv.textContent = "Invalid JSON object.";
        resultDiv.style.color = "red";
    }
}
