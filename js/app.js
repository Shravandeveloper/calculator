let resultScreen = document.getElementById('result');

function displaydata(num) {
    resultScreen.value += num;
}

function calculate() {
    try {
        resultScreen.value = eval(resultScreen.value);
    } catch (err) {
        alert('invalid')
    }
}

function Clear() {
    resultScreen.value = "";
}

function del() {
    resultScreen.value = resultScreen.value.slice(0, -1);
}