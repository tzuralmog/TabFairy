document.getElementById('new-group').addEventListener('click', function(){
    //if instruction text is there, remove it
    if(document.getElementById('empty'))
        document.getElementById('empty').remove();

    createNewGroup();
});

function createNewGroup(){
    //create elements and set attributes
    var ul = document.getElementById("groups");
    var li = document.createElement("li");
    var text = document.createElement("span");
    text.setAttribute("contenteditable", "true");
    text.setAttribute("spellcheck", "false");
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    li.style.backgroundColor = '#' + randomColor;
    text.innerHTML = "New Group";
    var btn = document.createElement("button");
    btn.setAttribute("class", "remove");
    btn.innerHTML = "Remove";

    //remove group function(Will be replaced once we have tab stuff)
    btn.onclick = function(){
        btn.parentElement.remove()
        return;
    };

    //append the stuff
    li.appendChild(text);
    li.appendChild(btn);
    ul.appendChild(li);
}
