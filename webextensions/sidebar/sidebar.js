// let log = document.getElementById("result-list");

function newTab() {
    browser.tabs.create();
    let log = document.getElementById("log");
    log.innerText = "Worked";
  }