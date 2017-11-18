// ==UserScript==
// @name        Youtube
// @namespace   youtube
// @include     /^https:\/\/www\.youtube\.com\/.*/
// @version     1
// @grant       none
// ==/UserScript==
// allow pasting


// do these things every 100 milliseconds, but only when facebook tab is open
var interval;
var setIntervals = function () {
  interval = setInterval(function () {
    // remove recommended videos
    var possibleElements = Array.prototype.slice.call(document.querySelectorAll('span.style-scope.ytd-video-meta-block'));
    for (var i = 0; i < possibleElements.length; i++) {
      if (possibleElements[i].innerHTML === 'Recommended for you') {
        possibleElements[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
      }
    }
  }, 100);
};
setIntervals();
window.addEventListener('blur', function () {
  clearInterval(interval);
});
window.addEventListener('focus', setIntervals);
