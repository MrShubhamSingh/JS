function onPageLoad() {
  const stringTitleData = localStorage.getItem('titleData') || '[]';
  const prevData = JSON.parse(stringTitleData);
  for (let i = 0; i < prevData.length; i++) {
    addList(prevData[i]);
  } // runs on browser load
}
function handleKeyPress(event) {
  if (event.keyCode == 13) {
    addList()
  }
}

function storeData(title) {
  const stringTitleData = localStorage.getItem('titleData') || '[]';
  const titleData = JSON.parse(stringTitleData);
  titleData.push(title);
  localStorage.setItem('titleData', JSON.stringify(titleData));
}


function addList(titleOnLoad) {
 let title = document.getElementById('title').value || titleOnLoad;
  if (title) {
    !titleOnLoad && storeData(title); 
    let listItem = document.createElement('li');
    listItem.innerText = title;
    //Adding a delete icon x
    let closeElement = document.createElement('span');
    const closeIcon = document.createTextNode('+');
    closeElement.className = 'delete';
    closeElement.addEventListener('click', deleteHandler);
    closeElement.appendChild(closeIcon);

    listItem.appendChild(closeElement);

    //Adding delete button
    let button =  document.createElement('button');
    button.value = 'Edit'
    button.className = 'editBtn';
    button.addEventListener('click', editHandler);
    button.innerText = "Edit";
    listItem.appendChild(button);
    //Attaching click handler for list
    listItem.addEventListener('click', listClickHandler);

    let listContainer = document.getElementById('list');
    listContainer.appendChild(listItem);
  }
  else {
    alert('Please enter the title');
  }
  document.getElementById('title').value = '';
}

function listClickHandler(event) {
  let list = event.target;
    if (list.className === 'selected') {
      list.className = '';
    } else {
      list.className = 'selected';
    }
    showDeleteAll();
}

function removeAllCloseButton() {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    list[i].firstElementChild.style.display = 'none';
    list[i].firstElementChild.nextSibling.style.display = 'none';
  }
}
function showAllCloseButton() {
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    list[i].firstElementChild.style.display = '';
    list[i].firstElementChild.nextSibling.style.display = '';
  }
}

function showDeleteAll() {
  const selectedList = document.querySelectorAll('.selected');
  const deleteContainer = document.querySelector('.deleteAllContainer');
  if (selectedList.length > 0) {
    deleteContainer.style.display = 'flex';
    removeAllCloseButton();
  } else {
    deleteContainer.style.display = 'none';
    showAllCloseButton();
  }
}

function deleteHandler(event) {
  event.stopPropagation();
  const { target = {} } = event;
  const { parentElement } = target;
  parentElement.style.display = 'none';
  const text = parentElement.childNodes[0].data;
  const stringTitleData = localStorage.getItem('titleData') || '[]';
  const prevData = JSON.parse(stringTitleData);
  const filteredArray = prevData.filter((i)=>{
        return i !== text;
  })
  localStorage.setItem("titleData", JSON.stringify(filteredArray))
}

function deleteAll() {
    const selectedList = document.querySelectorAll('.selected');
    const selectedTitleData = [];
    for (let i = 0; i < selectedList.length; i++) {
        let text = selectedList[i].childNodes[0].data;
        selectedTitleData.push(text);   
        selectedList[i].className="";
        selectedList[i].style.display=  "none";
    }
  const stringTitleData = localStorage.getItem('titleData') || '[]';
  const prevData = JSON.parse(stringTitleData);
  const filteredArray = prevData.filter((i)=>{
        return selectedTitleData.indexOf(i)==-1;
  })
  localStorage.setItem("titleData", JSON.stringify(filteredArray))
  showDeleteAll();
}

function editHandler(event){
  event.stopPropagation();
  const {target} = event;
  target.innerText = 'Save';
  target.removeEventListener('click', editHandler);
  target.addEventListener('click', saveHandler)
  const parentElement = target.parentElement;
  const textElement = parentElement.firstChild;

  const inputElement = document.createElement('input');
  inputElement.className='editInput';
  inputElement.value=textElement.data;
  inputElement.addEventListener('click', changeTextOnEdit)

  parentElement.replaceChild(inputElement, textElement)

  removeClickEventFromAllLists();

}

function changeTextOnEdit(event){
  event.stopPropagation();
}

function removeClickEventFromAllLists(){
  const list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
   list[i].removeEventListener('click', listClickHandler);
  }
};

function saveHandler(event){
 event.stopPropagation();
}
