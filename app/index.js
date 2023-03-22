function handleKeyPress(event){
    if(event.keyCode==13){
        addList();
    }
}

function addList(){
    let title = document.getElementById('title').value;
    if(title){
        let listItem = document.createElement("li");
        listItem.innerText = title;
        //Adding a delete icon x
        let closeElement  = document.createElement("span");
        const closeIcon = document.createTextNode('+')
        closeElement.className = "delete"
        closeElement.addEventListener('click',deleteHandler)
        closeElement.appendChild(closeIcon)

        listItem.appendChild(closeElement);

        //Attaching click handler for list
        listItem.addEventListener('click', listClickHandler)

        let listContainer = document.getElementById('list');
        listContainer.appendChild(listItem);
    }
    else{
        alert("Please enter the title")
    }
    document.getElementById('title').value = ""
}

function listClickHandler(event){
    let list = event.target;
    if(list.className==="selected"){
        list.className = ""
    }
    else{
        list.className="selected" 
    }
    showDeleteAll()
}

function removeAllCloseButton(){
    const list = document.getElementsByTagName('li');
    for(let i=0; i< list.length; i++){
        list[i].firstElementChild.style.display = 'none'
    }
}
function showAllCloseButton(){
    const list = document.getElementsByTagName('li');
    for(let i=0; i< list.length; i++){
        list[i].firstElementChild.style.display = ''
    }
}

function showDeleteAll(){
    const selectedList = document.querySelectorAll('.selected');
    const deleteContainer = document.querySelector(".deleteAllContainer")
    if(selectedList.length>0){
        deleteContainer.style.display = "flex"
        removeAllCloseButton()
    }
    else{
        deleteContainer.style.display = "none"
        showAllCloseButton()
    }
}

function deleteHandler(event){
    const {target = {}} = event;
    const {parentElement} = target;
    parentElement.style.display = 'none';
}

function deleteAll(){
    const selectedList = document.querySelectorAll('.selected');
    for(let i=0; i< selectedList.length; i++){
        selectedList[i].className="";
        selectedList[i].style.display=  "none";
    }
    showDeleteAll();
}
