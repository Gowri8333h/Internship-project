chrome.runtime.onInstalled.addListener(() => {
    const rule = {
      conditions: [
        new chrome.declarativeNetRequest.RequestCondition({
          urlPatterns: ["<all_urls>"],
          methodNames: ["GET", "POST", "HEAD"]
        })
      ],
      actions: [
        new chrome.declarativeNetRequest.CancelRequest()
      ]
    };
    chrome.declarativeNetRequest.addRule(rule, () => {
      console.log("Request intercepted!");
      chrome.storage.local.get("dataUsage", (result) => {
        const dataUsage = result.dataUsage || 0;
        const estimatedSize = 1024;
        chrome.storage.local.set({ dataUsage: dataUsage + estimatedSize });
      });
    });
  });