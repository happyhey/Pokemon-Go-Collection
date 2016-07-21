//chrome.storage.local.get(['imageUrl', 'pageUrl'], function(items) {
//    if (items.imageUrl) {
//        document.getElementById("rImage").src = items.imageUrl;
//    }
//    if (items.pageUrl) {
//        document.getElementById("rLink").href = "http://www.facebook.com/share.php?u=" + items.pageUrl;
//    }
//    chrome.browserAction.setIcon({path: 'icon.png'});
//    chrome.browserAction.setTitle({title: 'Cute Funny Dog. See you later!'});
//});
//
//

chrome.browserAction.setTitle({title: 'Pokemon Go Collection. See you later!'});
chrome.browserAction.setIcon({path: 'icon.png'});
chrome.storage.local.get('dayNum', function(items) {
    var n = items.dayNum;
    document.getElementById("rImage").src = 'images/' + n + '.jpg';
    document.getElementById("rTitle").innerText = dogs[n].title;
    document.getElementById("rLink").href = "http://www.facebook.com/share.php?u=" + dogs[n].path;
    document.getElementById("rLink2").href = "http://www.facebook.com/share.php?u=" + dogs[n].path;
});