function makeFriendsList(friends) {
  
let newUl = document.createElement("ul");

for (let obj of friends){
  let fullName = "";
  let elem = document.createElement("li");
  
  for (let name in obj){
    fullName += obj[name] + " ";
  }
  elem.innerHTML = fullName;
  newUl.append(elem);
    
}
return(newUl);
  
}
