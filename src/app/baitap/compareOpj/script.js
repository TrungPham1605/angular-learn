function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true; 
    if (obj1 == null || obj2 == null) return false;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (!obj2.hasOwnProperty(key)) return false;
            if (isObject(obj1[key]) && isObject(obj2[key])) {
                if (!deepEqual(obj1[key], obj2[key])) return false;
            } else if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
}

function compareObjects() {
    const object1Text = document.getElementById('object1').value;
    const object2Text = document.getElementById('object2').value;
    const resultDiv = document.getElementById('result');

    try {
        const obj1 = JSON.parse(object1Text);
        const obj2 = JSON.parse(object2Text);
        if (deepEqual(obj1, obj2)) {
            resultDiv.textContent = "Objects are equal!";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "Objects are not equal.";
            resultDiv.style.color = "red";
        }
    } catch (e) {
        resultDiv.textContent = "Invalid JSON format.";
        resultDiv.style.color = "red";
    }
}
