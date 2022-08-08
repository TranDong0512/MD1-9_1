function clickyes() {
    document.getElementById("love").innerHTML="Chọn đúng rồi tym tym!!!"

}
function out1(){
    let no= document.getElementById("N")
    let width = window.innerWidth;
    let height = window.innerHeight
    no.style.left = Math.round(Math.random()*width) + 'px'
    no.style.top = Math.round(Math.random()*height) + 'px'
}
