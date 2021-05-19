console.log('hello, world');
chrome.tabs.onUpdated.addListener(() => {
  console.log('hello, world');
});