document.addEventListener('DOMContentLoaded', () => {
    let userPoints = 0; // Inicialize os pontos do usuário
    const currentPointsDisplay = document.getElementById('current-points');
    const pointsHistoryDisplay = document.getElementById('points-history');
    const shopItems = document.querySelectorAll('.shop-item');
    
  
    function updateDisplay(){
       currentPointsDisplay.textContent = userPoints;
    }

    const pointsHistory = [];

     function addHistory(message) {
        const historyItem = document.createElement('p');
        historyItem.textContent = message;
        pointsHistoryDisplay.appendChild(historyItem);
    }


     function buyItem(itemId, itemPoints) {
        if (userPoints >= itemPoints) {
          userPoints -= itemPoints;
          updateDisplay();
          addHistory(`Você comprou um item ID ${itemId} por ${itemPoints} pontos.`);
          alert(`Compra realizada! Item ID ${itemId} comprado por ${itemPoints} pontos.`);
        } else {
          alert('Você não tem pontos suficientes para comprar este item.');
        }
     }

    shopItems.forEach(item => {
        item.querySelector('.buy-item').addEventListener('click', () => {
            const itemId = item.getAttribute('data-item-id');
            const itemPoints = parseInt(item.getAttribute('data-item-points'), 10);
            buyItem(itemId,itemPoints);
        });
    });

    updateDisplay();


});