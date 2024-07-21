function generateAndFindMax() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numElements = getRandomInt(1, 10);
    const array = Array.from({ length: numElements }, () => getRandomInt(5, 50));

    const maxNumber = Math.max(...array);

    document.getElementById('output').textContent = `Array: ${JSON.stringify(array)}\nMaximum Number: ${maxNumber}`;

    console.log('Array:', array);
    console.log('Maximum Number:', maxNumber);
}
