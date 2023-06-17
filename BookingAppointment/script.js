const Name = (document.getElementById('name')).value;
const Email = (document.getElementById('email')).value;
console.log(Name);
var form = document.getElementById('addForm');
form.addEventListener('submit', storeDetail)

function storeDetail(e){
    e.preventDefault();
    localStorage.setItem(Name,Email)
}

