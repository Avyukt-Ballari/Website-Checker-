if (window.location.href.indexOf("unblocked", "games", "1v1", "smash carts", "slope unblocked", "retrobowl",) > -1) {
    alert("You are not supposed to be on the website. You will be reported to an adminstrator immediatly.");
    console.log(window.location.href)
    chrome.tabs.getCurrent(function(tab) {
        chrome.tabs.remove(tab.id, function() { });
    });
  }