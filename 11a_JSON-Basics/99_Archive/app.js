//Pagination
function addPagingItem(parentElId,text) {
    let liNode = document.createElement("li");
    liNode.classList.add('page-item');
    let aNode = document.createElement("a");
    aNode.classList.add('page-link');
    let textNode = document.createTextNode(text);
    aNode.appendChild(textNode);
    liNode.appendChild(aNode);
    //parent element
    document.getElementById(parentElId).appendChild(liNode);
}
