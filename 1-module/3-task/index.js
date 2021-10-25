function ucFirst(str) {
  let str1='';
  if(str!=''){
    str1=str[0].toUpperCase();
    str1=str1+str.slice(1);
    return str1;
  }
  else{
    return str;
  }
  
}
