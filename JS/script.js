var allproducts = document.querySelectorAll(" .list li ")
var content =document.querySelector("#content")
var btn  =document.querySelector("#btn")
var btn1 =document.querySelector("#btn1")
var totalprice =0

allproducts.forEach(  function (item) {
    item.onclick = function () {
        totalprice +=  +(item.getAttribute("price"))
        content.innerHTML += item.innerHTML
        if( content.innerHTML != "" ){
            btn.style.display = "block"
        }
    }
})
allproducts.forEach(  function (item) {
    item.onclick = function () {
        totalprice +=  +(item.getAttribute("price"))
        content.innerHTML += item.innerHTML
        if( content.innerHTML != "" ){
            btn1.style.display = "block"
        }
    }
})

btn1.onclick = function (){
   document.getElementById("btn1").innerHTML= totalprice
}
