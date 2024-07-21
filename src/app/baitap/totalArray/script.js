function calculateSum() {
    const arrayInput = document.getElementById('arrayInput').value;
    const resultDiv = document.getElementById('result');

    try {
        // Parse the input string into an array
        const array = JSON.parse(arrayInput);

        // Ensure the input is an array of numbers
        if (!Array.isArray(array) || !array.every(item => typeof item === 'number')) {
            throw new Error('Input must be an array of numbers.');
        }

        // Calculate the sum using reduce
        const sum = array.reduce((acc, curr) => acc + curr, 0);

        // Display the result
        resultDiv.textContent = `Sum: ${sum}`;
        resultDiv.style.color = "green";
    } catch (e) {
        // Handle errors
        resultDiv.textContent = "Invalid input. Please enter a valid array of numbers.";
        resultDiv.style.color = "red";
    }
}
