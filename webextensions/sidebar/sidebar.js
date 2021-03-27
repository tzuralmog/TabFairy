document.getElementById('new-group').addEventListener('click', function(){
    //if instruction text is there, remove it
    if(document.getElementById('empty'))
        document.getElementById('empty').remove();

    createNewGroup();
});

function createNewGroup(){
    var ul = document.getElementById("groups");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.setAttribute("id", "rename");
    btn.innerHTML = "Rename";
    li.appendChild(document.createTextNode("New Group"));
    li.appendChild(btn);
    ul.appendChild(li);
}