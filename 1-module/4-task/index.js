function checkSpam(str) {
  let str1="1xBet";
  let str2="XXX";
  if(str.toLowerCase().includes(str1.toLowerCase()) || str.toLowerCase().includes(str2.toLowerCase())){
    return true
  }
  else {
    return false
  }
}


//Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру: