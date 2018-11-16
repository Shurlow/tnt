// console.log('Hello ram', $('#drawbridge-root').remove());

// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   // console.log('Turning ' + tab.url + ' red!');
//   // chrome.tabs.executeScript({
//   //   code: 'document.body.style.backgroundColor="red"'
//   // });
//   console.log(document);
//
//
//   chrome.tabs.executeScript(1, {
//     file: 'content.js'
//   })
//
// });
// console = chrome.extension.getBackgroundPage().console;
// console.assert('WAAA')
document.querySelector('#bomb').addEventListener('click', function() {
  console.log('BOOM!');
  
  
})

window.onload = function () {
  console.log(document.querySelector('#bomb'))
}


// chrome.extension.getBackgroundPage().console.log('WHATS THIS!!');



// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({ file: "jquery-3.1.1.min.js" }, function() {
//       chrome.tabs.executeScript({ file: "content.js" });
//   });
// });



// var tab_id = -1;
//
// chrome.tabs.getSelected(null, function(tab) {
//   tab_id = tab.id;
// });
//
// chrome.extension.onRequest.addListener(function(request, sender) {
//   console.log("In background listener", request);
//   chrome.tabs.executeScript(tab_id, {
//     file:"content.js"
//   });
// });
