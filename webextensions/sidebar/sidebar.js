// runs the tabs list on startup
document.addEventListener("DOMContentLoaded", listTabs);
browser.tabs.onUpdated.addListener(listTabs);
browser.tabs.onRemoved.addListener(listTabsWithRemove);
browser.tabs.onCreated.addListener(listTabs);
browser.tabs.onMoved.addListener(listTabs);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

function listTabs( ) {
  getCurrentWindowTabs().then((tabs) => {
     let tabsList = document.getElementById('tab-list');
     let currentTabs = document.createDocumentFragment();
     tabsList.textContent = '';
     for (let tab of tabs) {
      let tabLink = document.createElement('a');
      tabLink.textContent = tab.title || tab.id;
      currentTabs.appendChild(tabLink);
      let spacing = document.createElement('br');
      currentTabs.appendChild(spacing);
     }
     tabsList.appendChild(currentTabs);
  });
}
function listTabsWithRemove(tabId, removeInfo) {
  getCurrentWindowTabs().then((tabs) => {
     let tabsList = document.getElementById('tab-list');
     let currentTabs = document.createDocumentFragment();
     tabsList.textContent = '';
     for (let tab of tabs) {
      if (tab.id != tabId) {
      let tabLink = document.createElement('a');
      tabLink.textContent = tab.title || tab.id;
      currentTabs.appendChild(tabLink);
      let spacing = document.createElement('br');
      currentTabs.appendChild(spacing);
      }
     }
     tabsList.appendChild(currentTabs);
  });
}

document.getElementById('new-group').addEventListener('click', function(){
    //if instruction text is there, remove it
    if(document.getElementById('empty'))
        document.getElementById('empty').remove();

    //add a new group
    var ul = document.getElementById("groups");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New Group"));
    ul.appendChild(li);
});

document.getElementById('list-tabs').addEventListener('click', function(){
  // testing
  // browser.tabs.create();
  listTabs();
});