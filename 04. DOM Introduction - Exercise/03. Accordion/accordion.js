function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let content = document.getElementById("extra");
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        content.style.display = 'block'
    } else {
        button.textContent = 'More';
        content.style.display = 'none'
    }
}