function checkSpam(str) {
  let str1="1xbet";
  let str2="xxx";
  if(str.toLowerCase().includes(str1) || str.toLowerCase().includes(str2)){
    return true
  }
  else {
    return false
  }
}


//Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру: