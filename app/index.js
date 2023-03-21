function addList(){
    let title = document.getElementById('title').value;
    if(title){
        let listItem = document.createElement("li");
        listItem.innerText = title;
        let listContainer = document.getElementById('list');
        listContainer.appendChild(listItem);
        console.log(listContainer)
    }
    else{
        alert("Please enter the title")
    }
}

function deleteHandler(){
    let deleteItem = document.querySelectorAll('.delete')
    for(let i=0; i<deleteItem.length; i++){
        deleteItem[i].parentElement.style.display = 'none';
    }
}