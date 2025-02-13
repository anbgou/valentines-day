function createHearts() {
    const container = document.querySelector('.floating-hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}
createHearts();

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function checkAnniversary() {
    const code = document.getElementById("anniversaryCode").value;
    if (code === "240823") {
      showScreen("valentineScreen");
    } else {
      alert("Ми не тоді почали зустрічатися! Давай ше раз 💕");
    }
}

const noButton = document.getElementById("noButton");
const noTexts = [
    "Ти серйозно?? 🥺",
    "Точно? 😢",
    "Альооо???? 😭",
    "Та будь ласкаа! 💝",
    "Ну сонцее! 💔",
    "💔💔💔",
    "Я буду плакати! 😭",
    "Будь ласочка?! 🙏",
    "Ти мене не любиш?! 💔",
    "Ну перестань! 💖",
];
let textIndex = 0;

noButton.addEventListener("click", function () {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);

    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const safeX = Math.min(Math.max(0, x), maxX);
    const safeY = Math.min(Math.max(0, y), maxY);

    this.style.position = "fixed";
    this.style.left = safeX + "px";
    this.style.top = safeY + "px";

    this.textContent = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;
    });

    document.addEventListener("mouseleave", function () {
    noButton.style.position = "relative";
    noButton.style.left = "auto";
    noButton.style.top = "auto";
});

function countdown() {
    const eventDate = new Date("2023-08-24T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(Math.abs(distance) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Math.abs(distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((Math.abs(distance) % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((Math.abs(distance) % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

const interval = setInterval(countdown, 1000);

function beValentine(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}

function showFinalScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
}
