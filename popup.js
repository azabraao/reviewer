let rev = new ReviewCalculator();
calcDay.onclick = function(element) {
  rev.calculatesDay();
};
calcWeek.onclick = function(element) {
  rev.calculatesWeek();
};
calcMonth.onclick = function(element) {
  rev.calculatesMonth();
};

function ReviewCalculator(){
  let calcDay = document.getElementById('calcDay');
  let calcWeek = document.getElementById('calcWeek');
  let calcMonth = document.getElementById('calcMonth');

  this.calculatesDay = function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,{code:"var sum=0;document.querySelectorAll('.card-label').forEach( el => { sum += parseInt(el.textContent) })"}
      );
      chrome.tabs.executeScript(tabs[0].id,{code:'alert(sum)'});
    });
  }
  this.calculatesWeek = function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,{code:"var count = 0,sum = 0; document.querySelectorAll('.current-comment').forEach( el => {let arr = el.textContent.split('-'); sum += parseInt(arr[0]);	count++;if(count == 7){alert(sum);}});"});
    });
  }
  this.calculatesMonth = function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(        
        tabs[0].id,{code:"var count = 0,sum = 0;document.querySelectorAll('.current-comment').forEach( el => {let arr = el.textContent.split('-');if((sum + parseInt(arr[0]))){sum += parseInt(arr[0]);;}});"}
      );
      chrome.tabs.executeScript(tabs[0].id,{code:'alert(sum)'});
    });
  }
}
