document.addEventListener("DOMContentLoaded", function () {
    var choices = ["rock", "scissors", "paper"];
    var imagePaths = {
        rock: "../images/rock.gif",
        scissors: "../images/scissors.gif",
        paper: "../images/paper.gif"
    };
    var resultDiv = document.getElementById("result");
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var userChoice = event.target.id;
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];
            var resultMessage = getResult(userChoice, computerChoice);
            resultDiv.innerHTML = "\n        <h2>\uCEF4\uD4E8\uD130\uC758 \uC120\uD0DD: ".concat(computerChoice, "</h2>\n        <img src=\"").concat(imagePaths[computerChoice], "\" alt=\"").concat(computerChoice, "\" width=\"150\" height=\"150\">\n        <h2>").concat(resultMessage, "</h2>\n      ");
            alert(resultMessage);
        });
    });
    function getResult(user, computer) {
        if (user === computer) {
            return "비겼습니다!";
        }
        if ((user === "rock" && computer === "scissors") ||
            (user === "scissors" && computer === "paper") ||
            (user === "paper" && computer === "rock")) {
            return "이겼습니다!";
        }
        return "졌습니다!";
    }
});
