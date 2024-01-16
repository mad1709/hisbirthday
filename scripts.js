document.addEventListener("DOMContentLoaded", function () {
    // Display greetings and question as before
    displayGreetingsAndQuestion();
});

function displayGreetingsAndQuestion() {
    var greeting = document.getElementById("greeting");

    setTimeout(function () {
        greeting.innerHTML = "Welcome to your birthday party!";
        setTimeout(function () {
            greeting.innerHTML = "";
            displayQuestion();
        }, 4000);
    }, 3000);
}

function playBirthdayMusic() {
    // Create an audio element
    var audio = new Audio("./assets/happybirthday.mp3");

    // Play the audio
    audio.play();
}

function displayQuestion() {
    var questionContainer = document.querySelector('.container .question-container');
    var readyQuestion = document.getElementById('readyQuestion');

    questionContainer.style.display = 'block';
    readyQuestion.style.opacity = 1;
}

function moveNoButton() {
    var btnNo = document.getElementById("btnNo");
    var container = document.querySelector('.container');

    var rect = container.getBoundingClientRect();
    var maxX = rect.width - btnNo.offsetWidth;
    var maxY = rect.height - btnNo.offsetHeight;
    var randomX = rect.left + Math.floor(Math.random() * maxX);
    var randomY = rect.top + Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}

function showBirthdayMessage() {
    // Phát nhạc sinh nhật khi người dùng click "Yes"
    playBirthdayMusic();

    var questionContainer = document.querySelector('.container .question-container');
    var birthdayMessage = document.getElementById("birthdayMessage");
    var passwordInput = document.getElementById("passwordInput");
    var submitButton = document.getElementById("submitButton"); // Lấy nút submit
    var passwordNote = document.getElementById("passwordNote");

    questionContainer.style.display = 'none';
    birthdayMessage.style.display = 'block';
    passwordInput.style.display = 'block';
    submitButton.style.display = 'block'; // Hiển thị nút submit
    passwordNote.style.display = 'block';
}


function checkPassword() {
    var passwordInput = document.getElementById("passwordInput").value;

    if (passwordInput === "70") {
        window.location.href = "./page2/love.html"; // Chuyển hướng sang trang mới
    } else {
        alert("Wrong password! *dỗi*");
    }
}
