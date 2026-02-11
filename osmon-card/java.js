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
  const holdDuration = 1500;
  
  lastTwoButtons.forEach(button => {
    button.addEventListener('mousedown', startHold);
    button.addEventListener('mouseup', endHold);
    button.addEventListener('mouseleave', endHold);
    button.addEventListener('touchstart', startHold);
    button.addEventListener('touchend', endHold);
    button.addEventListener('touchcancel', endHold);
    
    function startHold() {
      isHolding = true;
      holdTimer = setTimeout(() => {
        if (isHolding) {
          const buttonText = button.textContent.trim();
          
          if (buttonText.includes('Kartani yangilash')) {
            alert('Yangi karta tayyorlanmoqda...');
            location.reload();
          } else if (buttonText.includes('Kartani yopish')) {
            alert('Karta muvaffaqiyatli yopildi.');
          }
        }
      }, holdDuration);
    }
    
    function endHold() {
      isHolding = false;
      clearTimeout(holdTimer);
    }
  });
});