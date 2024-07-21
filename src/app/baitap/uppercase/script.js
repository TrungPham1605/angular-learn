function capitalizeWords(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu mỗi từ
      .join(' '); // Nối các từ lại thành chuỗi
  }
  
  const inputText = document.getElementById('inputText');
  const convertButton = document.getElementById('convertButton');
  const result = document.getElementById('result');
  
  convertButton.addEventListener('click', () => {
    const text = inputText.value;
    result.textContent = capitalizeWords(text);
  });
  