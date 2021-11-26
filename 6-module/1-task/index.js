/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
// rows - массив объектов
export default class UserTable {
  constructor(rows) {
    let elem = this.render();
    this.elem=elem;
    let i=0;
    for (let row of rows){//row - одна строка
      let tr=document.createElement(`tr`);
      elem.lastChild.append(tr);
      let j=0;
      let td=document.createElement(`td`);
      for (let cell in row){ //cell - одна ячейка
        let td=document.createElement(`td`);
        elem.lastChild.children[i].append(td);
        elem.lastChild.children[i].children[j].innerHTML = `${row[cell]}`;
        j++;
      }
      elem.lastChild.children[i].append(td);
      elem.lastChild.children[i].children[j].innerHTML = `<button>X</button>`;
      let button=elem.lastChild.children[i].children[j].firstChild;
      this.i=i;
      button.addEventListener(`click`,this.ClickOnButton);
    
      i++;
    }
  
  }

  ClickOnButton () {
    this.closest(`tr`).remove();
  }


  render(){
    let elem = document.createElement('table');
    elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      </tbody>`;
  return elem;
  }
  

}
