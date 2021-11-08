function hideSelf() {
  
  let but=document.querySelector(".hide-self-button");
  
  function Hide (){
    but.setAttribute("hidden",true);
  }
  
  but.addEventListener("click",Hide); 


}
