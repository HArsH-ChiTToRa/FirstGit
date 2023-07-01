let form = document.getElementById('form');

form.addEventListener('submit', addExpanse);


function addExpanse(e){
    e.preventDefault();
    let myObj = {
        newAmount:document.getElementById('expanse').value,
        newDes:document.getElementById('description').value,
        newCategory:document.getElementById('category').value
    }
    var obj_str = JSON.stringify(myObj);
    localStorage.setItem(myObj.newDes, obj_str);
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.amount = myObj.newAmount;
    li.des = myObj.newDes;
    li.category = myObj.newCategory;
    li.appendChild(document.createTextNode(myObj.newAmount+"-"+myObj.newDes+"-"+myObj.newCategory));
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.appendChild(document.createTextNode("Delete Expanse"));
    var editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.appendChild(document.createTextNode("Edit Expanse"));
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    form.appendChild(li);
}

let Remove = document.getElementById('form');
Remove.addEventListener('click', remove);

function remove(e){
    if(e.target.classList.contains('delete')){
        localStorage.removeItem(e.target.parentElement.des);
        form.removeChild(e.target.parentElement);
    }
    else if(e.target.classList.contains('edit')){
        localStorage.removeItem(e.target.parentElement.des);
        document.getElementById('expanse').value = e.target.parentElement.amount;
        document.getElementById('description').value = e.target.parentElement.des;
        document.getElementById('category').value = e.target.parentElement.category;
        form.removeChild(e.target.parentElement);
    }
}

for(var key in localStorage){
    if(localStorage.hasOwnProperty(key)){
        let value = JSON.parse(localStorage[key]);
        console.log(value);
        let text = (value.newAmount+"-"+value.newDes+"-"+value.newCategory);
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.amount = value.newAmount;
        li.des = value.newDes;
        li.category = value.newCategory;
        li.appendChild(document.createTextNode(text));
        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.appendChild(document.createTextNode("Delete Expanse"));
        var editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.appendChild(document.createTextNode("Edit Expanse"));
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        form.appendChild(li);
    }
}



