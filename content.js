function detectSearchAction() {
  if (window.location.hostname.includes("google.com")) {
    chrome.runtime.sendMessage({ action: "incrementSearchCount" });
  }
}
detectSearchAction();