document.getElementById('new-group').addEventListener('click', function(){
    //if instruction text is there, remove it
    if(document.getElementById('empty'))
        document.getElementById('empty').remove();

    createNewGroup();
});

function createNewGroup(){
    var ul = document.getElementById("groups");
    var li = document.createElement("li");
    var text = document.createElement("span");
    text.setAttribute("contenteditable", "true");
    text.innerHTML = "New Group";
    var btn = document.createElement("button");
    btn.setAttribute("class", "remove");
    btn.innerHTML = "Remove";
    btn.onclick = function(){
        btn.parentElement.remove()
        return;
    };
    li.appendChild(text);
    li.appendChild(btn);
    ul.appendChild(li);
}
