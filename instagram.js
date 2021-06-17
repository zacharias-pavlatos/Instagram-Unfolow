(function insta () {
    const followersLink = document.querySelectorAll(".-nal3")[1];
    const followingLink = document.querySelectorAll(".-nal3")[2];
    openLink(followersLink,function(){
        getUsers(function(folowers){
            openLink(followingLink,function(){
                getUsers(function(following){
                    var toUnfolow = following.filter(val => !folowers.includes(val));
                    console.log("To Unfolow: ",toUnfolow);
                     [...document.querySelectorAll(".wo9IH")].forEach(el=>{
                        if (!toUnfolow.includes(el.querySelector("a.FPmhX.notranslate._0imsa").innerHTML)){
                            el.remove();
                        }
                    });
                });
            });
        });
    });
    function getUsers(callback){
        const popUp = document.querySelector(".isgrP");
        scrollToBottom(popUp,function(){
            var users = [...document.querySelectorAll("a.FPmhX.notranslate._0imsa")].map(link=>link.innerHTML);
            callback(users);
        })
    }
    function openLink(link,callback){
        link.click();
        setTimeout(function(){ 
            callback();
        }, 2000);
    }
    function scrollToBottom(el,callback){
        var scroller = setInterval(function(){ 
            if(el.offsetHeight+el.scrollTop!=el.scrollHeight){
                el.scrollTop = el.scrollHeight;
            }else{
                clearInterval(scroller);
                callback();
            }
        }, 2000,el);
    }
})();