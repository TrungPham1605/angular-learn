function normalizeTextCase(text) {
    const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (text.match(/[a-z]/g) || []).length;
  
    if (upperCaseCount > lowerCaseCount) {
      return text.toUpperCase();
    } else {
      return text.toLowerCase();
    }
  }

  const inputText = document.getElementById('inputText');
  const convertButton = document.getElementById('convertButton');
  const result = document.getElementById('result');

  convertButton.addEventListener('click', () => {
    const text = inputText.value;
    result.textContent = normalizeTextCase(text);
  });
  