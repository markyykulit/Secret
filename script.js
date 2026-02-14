var card = document.getElementById('theCard');

function openCard() {
  setTimeout(function() {
    card.classList.toggle('open');
    
    setTimeout(function() {
      card.classList.toggle('open');
      openCard();
    }, 10000);
  }, 3000);  
}

openCard();