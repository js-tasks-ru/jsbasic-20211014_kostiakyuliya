function highlight(table) {
  for (let newTr of table.rows){
    if (newTr.cells[3].getAttribute("data-available")=="true"){
      newTr.classList.add("available");
    }
    else if (newTr.cells[3].getAttribute("data-available")=="false"){
      newTr.classList.add("unavailable");
    }
    else if (newTr.cells[3].getAttribute("data-available")==null){
      newTr.setAttribute("hidden",true);
    }
    
    if (newTr.cells[2].innerHTML=="m"){
      newTr.classList.add("male");
    }
    else {
      newTr.classList.add("female");
    }
    
    if (newTr.cells[1].innerHTML<18){
      newTr.style.textDecoration = ["line-through"];
    }
  }
}







