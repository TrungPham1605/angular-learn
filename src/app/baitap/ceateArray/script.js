function generateAndSortArray() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numObjects = getRandomInt(1, 10);
    
    const array = Array.from({ length: numObjects }, (_, index) => ({
        stt: getRandomInt(0, 50)
    }));

    console.log('Unsorted Array:', array);

    const sortedArray = array.sort((a, b) => b.stt - a.stt);

    console.log('Sorted Array:', sortedArray);

    document.getElementById('output').textContent = `Unsorted Array:\n${JSON.stringify(array, null, 2)}\n\nSorted Array:\n${JSON.stringify(sortedArray, null, 2)}`;
}
