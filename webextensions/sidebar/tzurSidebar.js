// runs the tabs list on startup
document.addEventListener("DOMContentLoaded", listTabs);
browser.tabs.onActivated.addListener(listTabs);
browser.tabs.onRemoved.addListener(listTabsWithRemove);
browser.tabs.onCreated.addListener(listTabs);
browser.tabs.onMoved.addListener(listTabs);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

// variable that checks if remove has run, and if so then delays on update to give correct information
var i = false;
// count = 0;

function listTabs( ) {
  getCurrentWindowTabs().then((tabs) => {
    // document.getElementById('count').innerText = ++count;
      if(!i){
        // document.getElementById('log').innerText = browser.windows.getCurrent().then();
          
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
    }else{
        i = false;
        document.getElementById('log').innerText = i;
    }
  });
}
function listTabsWithRemove(tabId, removeInfo) {
  getCurrentWindowTabs().then((tabs) => {
    // document.getElementById('count').innerText = ++count;
      i = true;
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
     let querying = browser.tabs.query(active);
        querying.then(logTabs, onError);
     
     
  });
}


document.getElementById('list-tabs').addEventListener('click', function(){
    // testing
    listTabs();
  });
  

  function newTab(){
    var creating = browser.tabs.create();
    creating.then();
    // document.getElementById('log').innerHTML = "Changed";
}

document.getElementById('new-tab').addEventListener('click', function(){
    // testing
    newTab();
  });