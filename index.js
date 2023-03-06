const addElements = (root,tag,text) => {
let newDiv = document.getElementById(root);
let newElem = document.createElement(tag);
newElem.innerText=text;
newDiv.appendChild(newElem);
}
addElements("container1","p","hello this is text");
addElements("container2","button","submit");