function camelize(str) {
  let arr=str.split('-');
  let UpLet=arr.map(function( currentValue, index, arr ){
    if(index>0) return arr[index].charAt(0).toUpperCase()+arr[index].slice(1);
    else return currentValue;
  })
  let result=UpLet.join('');
  return result;
}

//'background-color'