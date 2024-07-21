document.getElementById('generateButton').addEventListener('click', function() {
    // Generate random number A with 6 digits
    const numberA = Math.floor(Math.random() * 900000) + 100000; // Random 6-digit number

    // Generate random number B with 2-3 digits
    const numberB = Math.floor(Math.random() * 900) + 10; // Random 2-3 digit number

    // Calculate C = A / B and round to 2 decimal places
    const result = (numberA / numberB).toFixed(2);

    // Display the results
    document.getElementById('numberA').textContent = `Number A: ${numberA}`;
    document.getElementById('numberB').textContent = `Number B: ${numberB}`;
    document.getElementById('result').textContent = `Result (A/B): ${result}`;
});
