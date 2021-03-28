// runs the tabs list on startup
document.addEventListener("DOMContentLoaded", listTabs);
browser.tabs.onUpdated.addListener(listTabs);
browser.tabs.onRemoved.addListener(listTabsWithRemove);
// browser.tabs.onCreated.addListener(listTabs);
// browser.tabs.onMoved.addListener(listTabs);

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

// variable that checks if remove has run, and if so then delays on update to give correct information
var i = false;

function listTabs( ) {
  getCurrentWindowTabs().then((tabs) => {
      if(!i){
        document.getElementById('log').innerText = "yes";
          
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
    }
  });
}
function listTabsWithRemove(tabId, removeInfo) {
  getCurrentWindowTabs().then((tabs) => {
     document.getElementById('log').innerText = "Changed";
     let tabsList = document.getElementById('tab-list');
     let currentTabs = document.createDocumentFragment();
     tabsList.textContent = '';
     for (let tab of tabs) {
      if (tab.id != tabId) {
      let tabLink = document.createElement('a');
    //   tabLink.textContent = tab.title || tab.id;
    tabLink.textContent = tab.id;
      currentTabs.appendChild(tabLink);
      let spacing = document.createElement('br');
      currentTabs.appendChild(spacing);
      }
     }
     tabsList.appendChild(currentTabs);
     let querying = browser.tabs.query(active);
        querying.then(logTabs, onError);
     if(tabId == tabs.active )
     i = true;
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