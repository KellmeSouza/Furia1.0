document.addEventListener('DOMContentLoaded', () => {
    let userPoints = 0;
    const currentPointsDisplay = document.getElementById('current-points');
    const commentInput = document.getElementById('comment-input');
    const sendCommentBtn = document.getElementById('send-comment-btn');
    let interactionInterval = null;
    let watchingInterval = null;

   function updateDisplay(){
       currentPointsDisplay.textContent = userPoints;
    }

      function addPoints(points){
        userPoints += points;
        updateDisplay();
    }
     function startWatchingPoints(){
         if (!watchingInterval){
             watchingInterval = setInterval(() => addPoints(1), 60000); // Ganha 1 ponto por minuto
         }
     }

    function enableInteraction(){
        commentInput.disabled = false;
        sendCommentBtn.disabled = false;
    }

      function startInteractionPoints(){
         if(!interactionInterval){
           interactionInterval = setInterval(() => addPoints(5), 60000 * 5); // Ganha 5 pontos a cada 5 minutos de interação
         }
      }
     function handleInteraction(){
          addPoints(2); // Ganha 2 pontos a cada interação
          startInteractionPoints();
     }

    sendCommentBtn.addEventListener('click', handleInteraction);

   // Iniciar a contagem de pontos
   startWatchingPoints();
  // Habilitar a interacao
    enableInteraction();
    updateDisplay();


});