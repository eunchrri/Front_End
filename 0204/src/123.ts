/*document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "scissors", "paper"];
  const imagePaths: { [key: string]: string } = {
    rock: "../images/rock.gif",
    scissors: "../images/scissors.gif",
    paper: "../images/paper.gif"
  };

  const resultDiv = document.getElementById("result") as HTMLDivElement;
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userChoice = (event.target as HTMLImageElement).id;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      
      const resultMessage = getResult(userChoice, computerChoice);

      resultDiv.innerHTML = `
        <h2>컴퓨터의 선택: ${computerChoice}</h2>
        <img src="${imagePaths[computerChoice]}" alt="${computerChoice}" width="150" height="150">
        <h2>${resultMessage}</h2>
      `;
      alert(resultMessage);
    });
  });

  function getResult(user: string, computer: string): string {
    if (user === computer) {
      return "비겼습니다!";
    }
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "이겼습니다!";
    }
    return "졌습니다!";
  }
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const choices = ["rock", "scissors", "paper"];
  const imagePaths: { [key: string]: string } = {
    rock: "../images/rock.gif",
    scissors: "../images/scissors.gif",
    paper: "../images/paper.gif"
  };

  const resultDiv = document.getElementById("result") as HTMLDivElement;
  const buttons = document.querySelectorAll(".btn");
  
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userChoice = (event.target as HTMLImageElement).id;
      let currentIndex = 0;
      
      // 애니메이션 효과 - 랜덤 이미지 회전
      const spinningImage = document.createElement("img");
      spinningImage.width = 150;
      spinningImage.height = 150;
      resultDiv.innerHTML = "<h2>컴퓨터가 선택 중...</h2>";
      resultDiv.appendChild(spinningImage);
      
      const interval = setInterval(() => {
        spinningImage.src = imagePaths[choices[currentIndex]];
        currentIndex = (currentIndex + 1) % choices.length;
      }, 200);
      
      setTimeout(() => {
        clearInterval(interval);
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const resultMessage = getResult(userChoice, computerChoice);
        
        resultDiv.innerHTML = `
          <h2>컴퓨터의 선택: ${computerChoice}</h2>
          <img src="${imagePaths[computerChoice]}" alt="${computerChoice}" width="150" height="150" justifyContent: center>
          <h2>${resultMessage}</h2>
        `;
        alert(resultMessage);
      }, 2000);
    });
  });

  function getResult(user: string, computer: string): string {
    if (user === computer) {
      return "비겼습니다!";
    }
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "이겼습니다!";
    }
    return "졌습니다!";
  }
});
