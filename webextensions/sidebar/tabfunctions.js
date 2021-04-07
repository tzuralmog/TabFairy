

function getCurrentWindowTabs() {
    return browser.tabs.query({ currentWindow: true });
}

// variable that checks if remove has run, and if so then delays on update to give correct information
var i = false;
count = 0;

function makeList(tabs,tabId = -1) {
    let tabsList = document.getElementById('tab-list');
    tabsList.innerHTML = '';
    for (let tab of tabs) {
        if (!i && tab.id != tabId) {
            var li = document.createElement("li");
            var text = document.createElement("span");
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            li.style.backgroundColor = '#' + randomColor;
            text.innerHTML = tab.title + " - " + tab.id;
            var btn = document.createElement("button");
            btn.setAttribute("class", "remove");
            btn.innerHTML = "Remove";

            //remove group function(Will be replaced once we have tab stuff)
            btn.onclick = function () {
                browser.tabs.remove(tab.id);
                btn.parentElement.remove()
                return;
            };

            //append the stuff
            li.appendChild(text);
            li.appendChild(btn);
            tabsList.appendChild(li);
        }
    }
}


function listTabs() {
    getCurrentWindowTabs().then((tabs) => {
        if (!i) {
            makeList(tabs);
        } else {
            i = false;
            document.getElementById('log').innerText = i;
        }

    });
}


function listTabsWithRemove(tabId, removeInfo) {
    getCurrentWindowTabs().then((tabs) => {
        i = true;
        let tabsList = document.getElementById('tab-list2');
        let currentTabs = document.createDocumentFragment();
        tabsList.textContent = '';
        for (let tab of tabs) {
            if (tab.id != tabId) {
                let tabLink = document.createElement('a');
                tabLink.textContent = tab.title + " - " + tab.id;
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


function newTab() {
    // ++count;
    document.getElementById('log').innerHTML = "Changed" + count;
    browser.tabs.create({});

}

function removeTab() {
    // ++count;
    document.getElementById('log').innerHTML = "Changed " + document.getElementById('tabID').value;
    browser.tabs.remove(parseInt(document.getElementById('tabID').value));
}