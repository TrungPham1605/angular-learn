function isPalindrome(text) {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const result = isPalindrome(inputText);
    document.getElementById('result').textContent = result ? "This is a palindrome!" : "This is not a palindrome.";
}
