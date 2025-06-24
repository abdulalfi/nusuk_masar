function clickButtonsInSequence() {
  // Check if first button is disabled with check icon
  const firstButton = Array.from(document.querySelectorAll('button.p-component')).find(btn => 
    btn.textContent.includes('تأكيد بيانات الجواز')
  );
  
  // Check if button is disabled and has check icon
  const isButtonCompleted = firstButton && 
                           firstButton.disabled && 
                           firstButton.querySelector('i.pi-check');

  if (isButtonCompleted) {
    console.log("Button is already completed - stopping");
    return false; // Stop the sequence
  }

  // First button click
  if (firstButton && !firstButton.disabled) {
    firstButton.click();
  }

  // Second button - اغلاق
  const secondButton = () => {
    const btn = Array.from(document.querySelectorAll('button.p-component span.p-button-label')).find(span => 
      span.textContent.includes('اغلاق')
    )?.closest('button');
    if (btn) btn.click();
  };
  
  // Third button - chevron-left icon
  const thirdButton = () => {
    const btn = document.querySelector('button.p-component i.pi-chevron-left')?.closest('button');
    if (btn) btn.click();
  };

  // Click sequence with delays
  setTimeout(secondButton, 700); // 2 second delay
  setTimeout(thirdButton, 1000); // 4 second total delay

  return true; // Continue the sequence
}

// Main loop function with interval
function startAutoClicker() {
  const intervalId = setInterval(() => {
    const shouldContinue = clickButtonsInSequence();
    if (!shouldContinue) {
      clearInterval(intervalId);
      console.log("Auto-clicker stopped");
    }
  }, 1200); // Check every 5 seconds
}

// Run when extension button is clicked
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startAutoClicker") {
    startAutoClicker();
  }
  if (request.action === "stopAutoClicker") {
    // You can implement stopping logic if needed
  }
});