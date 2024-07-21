document.getElementById('generateButton').addEventListener('click', function() {
    const numItems = Math.floor(Math.random() * 17) + 4;
    
    const gridContainer = document.getElementById('grid');
    
    gridContainer.innerHTML = '';
    
    for (let i = 0; i < numItems; i++) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.textContent = `Item ${i + 1}`;
        gridContainer.appendChild(item);
    }
    
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        if (index < numItems) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
    
    const numRows = Math.ceil(numItems / 4);
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, auto)`;
});
