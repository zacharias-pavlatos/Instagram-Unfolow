# Instagram-Unfolow
Unfollow Users on Instagram Who Don’t Follow You Back


# How to use
Create a Bookmarklet 

![alt text](https://github.com/zacharias-pavlatos/Instagram-Unfolow/blob/master/Screeshot.png?raw=true)

Paste the code bellow 
javascript:!function(){var e=document.querySelectorAll(".-nal3")[1],n=document.querySelectorAll(".-nal3")[2];function l(n){var e,o,l,t=document.querySelector(".isgrP");e=t,o=function(){var e=[...document.querySelectorAll("a.FPmhX.notranslate._0imsa")].map(e=>e.innerHTML);n(e)},l=setInterval(function(){e.offsetHeight+e.scrollTop!=e.scrollHeight?e.scrollTop=e.scrollHeight:(clearInterval(l),o())},2e3,e)}function t(e,n){e.click(),setTimeout(function(){n()},2e3)}t(e,function(){l(function(o){t(n,function(){l(function(e){const n=e.filter(e=>!o.includes(e));console.log("To Unfolow: ",n);[...document.querySelectorAll(".wo9IH")].map(e=>{n.includes(e.querySelector("a.FPmhX.notranslate._0imsa").innerHTML)||e.remove()})})})})})}();
