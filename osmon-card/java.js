document.addEventListener('DOMContentLoaded', function() {
  // info elementidagi matnlarni 5 soniyada bir yangilash
  const infoElement = document.querySelector('.info p');
  const messages = [
    '📆 Keyingi ko\'chirma sanasi 27-dekabr kuni',
    '',
    '🔔 Ko\'chirma hisobotingiz tayyor.',
    '',
    '🤩 Sizda qarzdorlik yo\'q.',
    '',
    '🛍 Yana xarid qilishda davom etishingiz mumkin.',
    ''
  ];
  
  let currentMessageIndex = 0;
  
  setInterval(() => {
    infoElement.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  }, 5000);
  
  // button elementlariga 3 soniya bosib turish funksiyasi
  const buttons = document.querySelectorAll('.actions > button');
  const lastTwoButtons = [buttons[buttons.length - 2], buttons[buttons.length - 1]];
  
  let holdTimer = null;
  let isHolding = false;
  const holdDuration = 3000;
  
  lastTwoButtons.forEach(button => {
    button.addEventListener('mousedown', function() {
      isHolding = true;
      holdTimer = setTimeout(() => {
        if (isHolding) {
          const buttonText = button.textContent.trim();
          
          if (buttonText.includes('Kartani yangilash')) {
            alert('Karta yangilandi!');
            location.reload();
          } else if (buttonText.includes('Kartani yopish')) {
            alert('Karta yopildi!');
          }
        }
      }, holdDuration);
    });
    
    button.addEventListener('mouseup', function() {
      isHolding = false;
      clearTimeout(holdTimer);
    });
    
    button.addEventListener('mouseleave', function() {
      isHolding = false;
      clearTimeout(holdTimer);
    });
  });
});