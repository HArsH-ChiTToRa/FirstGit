var Div = document.getElementById('dv');
var form = document.getElementById('addForm');
form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    var mail = (document.getElementById('email')).value
    var myObj = {
        Name: (document.getElementById('name')).value,
        Email: (document.getElementById('email')).value,
        Phone: (document.getElementById('phone')).value
    }
    //var obj_serial = JSON.stringify(myObj);
    axios.post("https://crudcrud.com/api/0730ab67d3b24962bf762820714dc948/appointmentdata", myObj)
    .then((res) => {
        console.log(res);
        showUserOnScreen(res.data);
    })
    .catch(err => console.log(err));
}

function showUserOnScreen(user){
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.id = user._id;
    li.appendChild(document.createTextNode(user.Name+"-"+user.Email+"-"+user.Phone));
    var Delete = document.createElement('button');
    Delete.className = 'delete';
    Delete.appendChild(document.createTextNode("Delete"));
    li.appendChild(Delete);
    var Edit = document.createElement('button');
    Edit.className = 'edit';
    Edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(Edit);
    Div.appendChild(li);
}

window.addEventListener('DOMContentLoaded', ()=> {
    axios.get("https://crudcrud.com/api/0730ab67d3b24962bf762820714dc948/appointmentdata")
    .then((res) => {
        console.log(res);
        for(var i=0; i<res.data.length; i++){
            showUserOnScreen(res.data[i]);
        }
    })
    .catch(err => console.log(err))
})


var Remove = document.getElementById('dv');
Remove.addEventListener('click', Details);

function Details(e){
     if(e.target.classList.contains('delete')){
        const id = e.target.parentElement.id;
        axios.delete(`https://crudcrud.com/api/0730ab67d3b24962bf762820714dc948/appointmentdata/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        var x = e.target.parentElement;
        Div.removeChild(x);
        
    }


}




