function toggleText() {
  
  let but=document.querySelector(".toggle-text-button");
  let textForHide=document.getElementById("text");
  
  console.log(textForHide);
  function Hide (){
    textForHide.toggleAttribute("hidden");
  }
  
  but.addEventListener("click",Hide); 

}
