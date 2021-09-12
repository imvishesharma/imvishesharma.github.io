var myImgHidden = true;

window.onscroll = function() {f()};

function f() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        if(myImgHidden) {
            document.getElementById("myimg-name-hidden").id = "myimg-name-show";
            myImgHidden = false;
        }
    } else if(!myImgHidden){
        document.getElementById("myimg-name-show").id = "myimg-name-hidden";
        myImgHidden = true;
    }
}