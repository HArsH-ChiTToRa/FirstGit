let form = document.getElementById('form');
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');

form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();
    let myObject = {
        Price:document.getElementById('price').value,
        Dish:document.getElementById('dish').value,
        Table:document.getElementById('table').value
    }
    axios.post("https://crudcrud.com/api/f502c07b845d41dea20bfac42e410de1/waiter", myObject)
    .then((res) => {
        showOnScreen(res.data);
        console.log(res);
    })
    .catch(err => console.log(err));
}

function showOnScreen(user){
    let ul=document.createElement('ul');
    ul.className = "sub-list"
    let li = document.createElement("li");
    li.className = "sub-list-item";
    li.id = user._id;
    li.style = "color:black";
    let h5 = document.createElement('h5');
    h5.appendChild(document.createTextNode(user.Price+"-"+user.Dish+"-"+user.Table));
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete"
    deleteButton.appendChild(document.createTextNode("Delete Order"));
    h5.appendChild(deleteButton);
    li.appendChild(h5);
    ul.appendChild(li);
    if(user.Table === "Table 1")
    table1.appendChild(ul);
    else if(user.Table === "Table 2")
    table2.appendChild(ul);
    else if(user.Table === "Table 3")
    table3.appendChild(ul);
}

window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/f502c07b845d41dea20bfac42e410de1/waiter")
    .then((res) => {
        console.log(res);
        for(var i=0; i<res.data.length; i++){
            showOnScreen(res.data[i])
        }
    })
    .catch(err => console.log(err));
})

let Remove = document.getElementById("cls");
Remove.addEventListener('click', deleted);

function deleted(e){
    if(e.target.classList.contains('delete')){
        const id = e.target.parentElement.parentElement.id;
        axios.delete(`https://crudcrud.com/api/f502c07b845d41dea20bfac42e410de1/waiter/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        const x = e.target.parentElement.parentElement.parentElement;
        if(x.parentElement == table1)
        table1.removeChild(x);
        else if(x.parentElement == table2)
        table2.removeChild(x);
        else if(x.parentElement == table3)
        table3.removeChild(x);
    }
}

