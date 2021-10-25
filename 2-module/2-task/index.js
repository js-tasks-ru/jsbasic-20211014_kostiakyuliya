function isEmpty(obj) {
    for (let key in obj){
      return false;
    }
    return true;

}


//Создайте функцию isEmpty(obj), которая возвращает true, 
//если в объекте нет свойств и false – если хоть одно свойство есть.