function makeDiagonalRed(table) {
  
  let i = 0,j = 0;
  for (let newTr of table.rows){
    
    newTr.cells[j].style.backgroundColor="red";
    i++;
    j++;
  }

}
