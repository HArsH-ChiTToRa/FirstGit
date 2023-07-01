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
    var obj_serial = JSON.stringify(myObj);
    localStorage.setItem(mail, obj_serial);

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.mail = mail;
    li.appendChild(document.createTextNode(myObj.Name+"-"+myObj.Email+"-"+myObj.Phone));
    var Delete = document.createElement('button');
    Delete.className = 'delete';
    Delete.appendChild(document.createTextNode("Delete"));
    li.appendChild(Delete);
    Div.appendChild(li);

}


var Remove = document.getElementById('dv');
Remove.addEventListener('click', removeDetails);

function removeDetails(e){
    if(e.target.classList.contains('delete')){
        localStorage.removeItem(e.target.parentElement.mail);
        var x = e.target.parentElement;
        Div.removeChild(x);
        
    }
}