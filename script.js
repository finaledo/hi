// scrolly scrolly
const scrollContainer = document.getElementById("scrollContainer");
const boxes = document.querySelectorAll(".project-box");

let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < boxes.length - 1) {
        currentIndex++;
        scrollToBox();
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToBox();
    }
});
function scrollToBox() {
    scrollContainer.scrollTo({
        left: boxes[currentIndex].offsetLeft,
        behavior: "smooth"
    });
}

// dark mode :3
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


// messaging
const sendBtn = document.getElementById("sendBtn");
const nameInp = document.getElementById("nameInp");
const emailInp = document.getElementById("emailInp");
const greetings = ["Thanks","Thank you","Thank you so much","I appriciate it","Much appreciated","Im grateful for your message","Thanks a lot","Many thanks to you"];
sendBtn.addEventListener("click", function () {
    setTimeout(() => {
    Swal.fire({
        text: `From Hanif: ${greetings[Math.floor(Math.random() * greetings.length)]} ${nameInp.value} for telling me: "${document.getElementById("messageInp").value}".I will get back to you as soon as possible via your email ${emailInp.value}!`,
        confirmButtonText: "ok",
        background: "#282828",
        color: "white",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: { popup: "animate__animated animate__bounceIn" }
    });
    }, 2000);
});
//fun facts
function fact() {
    const facts = ["I originally wanted to make art before programming","am real i exist","I have a cat :3","I first started programming in late 2020","my favorite color is green","Im currently working on some of my personal projects","if your reading this, im probably currently either existing peacefully or programming","this isnt the first website i made ^_^"];
    Swal.fire({
        text: facts[Math.floor(Math.random() * facts.length)],
        confirmButtonText: "ok",
        background: "#282828",
        color: "white",
    });
}
// confetti plugin
function celebrate() {
    Swal.fire({
        text: "Lorem ipsum dolor- nah nah just kidding i'm actually an animator now! yipee (currently inactive in animating because im lazy D:)",
        icon: "success",
        confirmButtonText: "ok",
        background: "#282828",
        color: "white",
    }).then(() => {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    });
}