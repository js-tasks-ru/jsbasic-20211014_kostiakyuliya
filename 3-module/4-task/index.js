function showSalary(users, age) {
  let result='';
  let m=0;
  for (let i=0;i<users.length;i++){
    let key=users[i];
    if(key.age<=age) {
      if(m!=0) {
        result+=`
${key.name}, ${key.balance}`;
    }
      else {
        result+=`${key.name}, ${key.balance}`;
        m++;
      }
    }
  }
  return result;
}
