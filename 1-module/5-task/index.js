function truncate(str, maxlength) {
  if(str.length>maxlength){//усечение не требуется
    let str1=str.slice(0,maxlength-1)+"…";
    return str1;
  }
  else{
    return str;
  }
}


//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
//если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.