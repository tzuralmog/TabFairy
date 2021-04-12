// runs the tabs list on startup
document.addEventListener("DOMContentLoaded", listTabs);
// browser.tabs.onActivated.addListener(listTabs);
browser.tabs.onRemoved.addListener(listTabsWithRemove);
browser.tabs.onCreated.addListener(listTabs);
browser.tabs.onMoved.addListener(listTabs);
browser.tabs.onUpdated.addListener(listTabs);


document.getElementById('list-tabs').addEventListener('click', listTabs);

document.getElementById('new-tab').addEventListener('click', newTab);

document.getElementById('rem-tab').addEventListener('click', removeTab);



// document.getElementById('test-tab').addEventListener('click', listTabs2);



