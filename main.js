const textarea = document.getElementById("text");

function f1(e) {
    let frontValue = e.value
    textarea.style.fontSize = frontValue + "px";
}
function f2(e) {
    let frontValue = e.value
    textarea.style.color = frontValue ;
}