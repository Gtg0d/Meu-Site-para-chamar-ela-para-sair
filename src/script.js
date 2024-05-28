function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉⛸️🎉⛸️🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Beleza! Então que tal a gente se encontar lá no shopping de tarde, depois do almoço? Dps de patinar se vc estiver com vontade a gente ainda pode ir no cinema assistir alguma coisa. Ah eu não consego ver se você respondeu, então tira um print da tela ou me manda msg, please!"

    
    ;
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "Pq não ?? 😢";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 25000);
  }
  