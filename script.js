const aboutText = 'An enthusiastic and self-competitive person who endeavors to seek and complete new challenges. I am motivated and eager to advance my career with a growth-oriented, technically advanced organization. I am always exploring new technologies and keen to enhance my logical aptitude and problem-solving skills.';
let index = 0;
const speed = 50;

function typeWriter() {
    const element = document.getElementById("about-text");
    if (index < aboutText.length) {
        element.innerHTML += aboutText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
const headerText = 'Developer | Problem Solver | Tech Enthusiast';
let headerIndex = 0;
const headerSpeed = 100;

function typeWriterHeader() {
    const headerElement = document.getElementById("header-text");
    if (headerIndex < headerText.length) {
        headerElement.innerHTML += headerText.charAt(headerIndex);
        headerIndex++;
        setTimeout(typeWriterHeader, headerSpeed);
    }
}

window.onload = function () {
    typeWriter();
    typeWriterHeader();
};

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    const themeButton = document.getElementById("theme-toggle-btn");
    if (body.classList.contains("light-mode")) {
        themeButton.innerHTML = "🌙 Dark Mode";
    } else {
        themeButton.innerHTML = "☀️ Light Mode";
    }
}

