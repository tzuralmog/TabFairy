document.getElementById('new-group').addEventListener('click', function(){
    //if instruction text is there, remove it
    if(document.getElementById('empty'))
        document.getElementById('empty').remove();

    //add a new group
    var ul = document.getElementById("groups");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New Group"));
    ul.appendChild(li);
});

document.getElementById('new-tab').addEventListener('click', function(){
  // testing
  browser.tabs.create();
});