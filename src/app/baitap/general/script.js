function findIntersection() {
    const array1Input = document.getElementById('array1Input').value;
    const array2Input = document.getElementById('array2Input').value;
    const resultDiv = document.getElementById('result');

    try {
        const array1 = JSON.parse(array1Input);
        const array2 = JSON.parse(array2Input);

        if (!Array.isArray(array1) || !Array.isArray(array2)) {
            throw new Error('Both inputs must be valid arrays.');
        }

        const intersection = array1.filter(value => array2.includes(value));

        resultDiv.textContent = `Intersection: [${intersection.join(', ')}]`;
        resultDiv.style.color = "green";
    } catch (e) {
        resultDiv.textContent = "Invalid array format. Please enter valid arrays.";
        resultDiv.style.color = "red";
    }
}
