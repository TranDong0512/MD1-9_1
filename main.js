var anh = null;
anh= document.getElementById("myImage");

function init() {
    anh = document.getElementById("myImage");
    anh.style.position="relative";
    anh.style.left = "0px";
    anh.style.top = "0px";
} function quaphai() {
    anh.style.left= parseInt(anh.style.left) + 10 +"px"
}
    function quatrai() {
    anh.style.left= parseInt(anh.style.left)- 10 +"px"
    }
    function lentren() {
    anh.style.top= parseInt(anh.style.top) - 10 +"px"
    }
    function xuongduoi() {
    anh.style.top= parseInt(anh.style.top) +10 + "px"
    }
window.onload = init();