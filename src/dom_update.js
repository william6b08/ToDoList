
const createToDoDOM = function(List){
  const mainContent = document.getElementById("maincontent");
  if (mainContent.firstChild){
    mainContent.firstChild.remove();
  }
  for(const item of List){
    const div = document.createElement('div');
    div.classList.add('ToDo-Div');
    for (const prop in item){
      const para = document.createElement('p');
      para.classList.add(prop);
      para.textContent = item[prop];
      div.appendChild(para);
    }
    mainContent.appendChild(div);
  }
}

export default createToDoDOM;