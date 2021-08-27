var NAME_FONT_SIZE = 55;
var QUOTE_FONT_SIZE = 25;
var IMG_HEIGHT = 650;

var NAME_TOP = 200;
var QUOTE_TOP = NAME_TOP + NAME_FONT_SIZE + QUOTE_FONT_SIZE;

function onInit() {
    var h = IMG_HEIGHT; //window.outerHeight;
    var w = window.outerWidth;

    document.getElementById("img").style.width = w + "px";
    document.getElementById("img").style.height = h + "px";

    document.getElementById("name").style.fontSize = NAME_FONT_SIZE + "px";
    document.getElementById("quote").style.fontSize = QUOTE_FONT_SIZE + "px"; 

    document.getElementById("name").style.top = NAME_TOP + "px";
    document.getElementById("name").style.left = (w/2 - 3*NAME_FONT_SIZE) + "px";

    document.getElementById("quote").style.top = QUOTE_TOP + "px";
    document.getElementById("quote").style.left = (w/2 - 11*QUOTE_FONT_SIZE) + "px";

    document.getElementById("icon").style.left = (w/2) + "px";
    document.getElementById("icon").style.top = (IMG_HEIGHT - 60) + "px";
}

function f() {
    var h = IMG_HEIGHT; //window.outerHeight;
    var w = window.outerWidth;

    document.getElementById("img").style.width = w + "px";
    document.getElementById("img").style.height = h + "px";

    document.getElementById("name").style.top = NAME_TOP + "px";
    document.getElementById("name").style.left = (w/2 - 3*NAME_FONT_SIZE) + "px";

    document.getElementById("quote").style.top = QUOTE_TOP + "px";
    document.getElementById("quote").style.left = (w/2 - 11*QUOTE_FONT_SIZE) + "px";

    console.log(window.innerHeight + " " + window.innerWidth);
}

onInit();