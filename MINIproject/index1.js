 /*let div = document.querySelector("div");
 let ul = document.querySelector("ul");
 let li = document.querySelectorAll("li");

 div.addEventListener("click", function (el) {
    el.stopPropagation();
    console.log("div was clicked ") ; 
 })

 ul.addEventListener("click", function (el) {
    el.stopPropagation();
    console.log("ul was clicked ") ; 
 })

 for ( l of li) {
l.addEventListener("click" , function(el){
    el.stopPropagation() ; 
    console.log("li was clicked");
     
});
}*/


let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){

  let item= document.createElement("li");
  item.innerText=input.value ; 

  let delbtn = document.createElement("button");
  delbtn.innerText="delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  ul.appendChild(item);

  input.value="";
});
//using event bubbling
 ul.addEventListener("click" , function(event){ 
     if (event.target.nodeName=="BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted") ; 
     }
 });

