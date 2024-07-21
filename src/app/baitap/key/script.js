function findKeys() {
    const objectInput = document.getElementById('objectInput').value;
    const valueInput = document.getElementById('valueInput').value;
    const resultDiv = document.getElementById('result');

    try {
        const obj = JSON.parse(objectInput);

        const searchValue = isNaN(valueInput) ? valueInput : Number(valueInput);

        const matchingKeys = Object.keys(obj).filter(key => obj[key] === searchValue);

        if (matchingKeys.length > 0) {
            resultDiv.textContent = `Matching keys: ${matchingKeys.join(', ')}`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "No matching keys found.";
            resultDiv.style.color = "red";
        }
    } catch (e) {
        resultDiv.textContent = "Invalid object format. Please enter a valid JSON object.";
        resultDiv.style.color = "red";
    }
}
