document.getElementById('startButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "startAutoClicker"});
    document.getElementById('status').textContent = "Running...";
  });
});

document.getElementById('stopButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "stopAutoClicker"});
    document.getElementById('status').textContent = "Stopped";
  });
});