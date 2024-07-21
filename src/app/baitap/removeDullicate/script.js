function removeDuplicates() {
    const arrayInput = document.getElementById('arrayInput').value;
    const resultDiv = document.getElementById('result');

    try {
        const arrays = JSON.parse(`[${arrayInput}]`);

        if (!Array.isArray(arrays) || !arrays.every(Array.isArray)) {
            throw new Error("Input is not a valid array of arrays.");
        }

        const uniqueArray = [...new Set(arrays.flat())];

        resultDiv.textContent = `Array with duplicates removed: ${JSON.stringify(uniqueArray)}`;
        resultDiv.style.color = "green";
    } catch (e) {
        resultDiv.textContent = "Invalid array format. Please enter a valid JSON array of arrays.";
        resultDiv.style.color = "red";
    }
}
