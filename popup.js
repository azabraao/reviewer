let calcDay = document.getElementById('calcDay');
let calcWeek = document.getElementById('calcWeek');
let calcMonth = document.getElementById('calcMonth');

calcDay.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,{code:"var sum=0;document.querySelectorAll('.card-label').forEach( el => { sum += parseInt(el.textContent) })"}
    );
    chrome.tabs.executeScript(tabs[0].id,{code:'alert(sum)'});
  });
};
calcWeek.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,{code:"var count = 0,sum = 0; document.querySelectorAll('.current-comment').forEach( el => {let arr = el.textContent.split('-'); sum += parseInt(arr[0]);	count++;if(count == 7){alert(sum);}});"});
  });
};
calcMonth.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,{code:"var count = 0,sum = 0; document.querySelectorAll('.current-comment').forEach( el => {let arr = el.textContent.split('-'); sum += parseInt(arr[0]);	count++;})"}
    );
    chrome.tabs.executeScript(tabs[0].id,{code:'alert(sum)'});
  });
};