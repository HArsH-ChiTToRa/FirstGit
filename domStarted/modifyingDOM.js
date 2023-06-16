var newDiv = document.createElement('div');
newDiv.className = 'Hello1';
var text1 = document.createTextNode("HEllo")
newDiv.appendChild(text1);
newDiv.style.fontSize = "30px"
var itemLister = document.querySelector('header .container')
var title = document.querySelector('header h1');
itemLister.insertBefore(newDiv, title);




var newDiv1 = document.createElement('div')
newDiv1.className = 'Hello2';
var text2 = document.createTextNode("HEllo")
newDiv1.appendChild(text2);
newDiv1.style.fontSize = "30px"
var itemLister1 = document.querySelector('div .list-group')
var title1 = document.querySelector('div li');
itemLister1.insertBefore(newDiv1, title1);



console.log(newDiv);