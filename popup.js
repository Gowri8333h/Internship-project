chrome.history.search({ text: '', maxResults: 100 }, function(historyItems) {
  let totalUsageTime = 0;
  for (let i = 0; i < historyItems.length - 1; i++) {
    const currentVisit = historyItems[i];
    const nextVisit = historyItems[i + 1];
    const timeDifference = nextVisit.lastVisitTime - currentVisit.lastVisitTime;
    if (timeDifference > 0) {
      totalUsageTime += timeDifference;
    }
  }
  const usageHours = totalUsageTime / (1000 * 60 * 60); 
  document.getElementById("usageTime").textContent = Math.max(usageHours, 0).toFixed(2) + " hours";
});
chrome.storage.local.get("searchCount", function(result) {
  const searchCount = result.searchCount || 0;
  document.getElementById("searchCount").textContent = searchCount;
});
chrome.storage.local.get("dataUsage", function(result) {
  const dataUsage = result.dataUsage || 0;
  document.getElementById("dataUsage").textContent = dataUsage.toLocaleString() + " bytes";
});