let isRunning = false;
let intervalId = null;

chrome.action.onClicked.addListener((tab) => {
  if (!isRunning) {
    isRunning = true;
    chrome.tabs.sendMessage(tab.id, { action: "startAutoClicker" });
    chrome.action.setIcon({ path: "icon_active.png" });
    chrome.action.setTitle({ title: "Auto-clicker is running" });
  } else {
    isRunning = false;
    chrome.tabs.sendMessage(tab.id, { action: "stopAutoClicker" });
    chrome.action.setIcon({ path: "icon.png" });
    chrome.action.setTitle({ title: "Auto-clicker is stopped" });
  }
});