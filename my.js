document.getElementById("opq1").addEventListener("click", hideQuote);

function hideQuote() {
    document.getElementById("opq1").style.display = "none";
    document.getElementById("divx").style.opacity = "100%";
    document.getElementById("div1").style.backgroundColor = "white";
}