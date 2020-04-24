const task3Element = document.getElementById("task-3");

function showAlert() {
    alert("hello");
}

function showName(name) {
    alert("Hi " + name);
}

function concatStrings(val1, val2, val3) {
    return val1 + val2 + val3;
}

showName("Miguel");

task3Element.addEventListener("click", showAlert);

const result = concatStrings("Mi", "gu", "el");
alert(result);
