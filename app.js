var div=document.getElementById("main");

var task=document.getElementById("task");

var data=[];

function alltask(id,taskname){
    this.id=id;
    this.task=taskname;
}

var input=document.getElementById("input");

var but=document.createElement("button");
but.appendChild(document.createTextNode("➕"));
but.setAttribute("onclick",`add()`)

input.appendChild(but);

var all=document.getElementById("alltask");

var p=document.createElement("p");

all.appendChild(p);


var li = document.createElement('li');
    li.setAttribute("id",Math.random() *2);

function add() {

    var cons=new alltask(data.length,task.value);
    console.log(cons);
    
    data.push(cons);
    console.log(data);

 
   
    var list=document.createElement("ol");
    list.setAttribute("id","mylist");
    all.appendChild(list);


    for(var key in data){
    var obj={
        // "taskid":data[key].id,
        "usertask":data[key].task
    };
    console.log(obj);   
}


    for(var key2 in obj){
    

    var listItem = li.appendChild(document.createTextNode(obj[key2]));
    list.appendChild(listItem);
    task.value="";
    console.log(obj[key2]);



    //delete
    var del=document.createElement("button")
    del.setAttribute("id","delete")
    var deltext=document.createTextNode("❌")
    del.setAttribute("onclick",'removetask(event)')


    var editbtn=document.createElement("button")
    editbtn.setAttribute("id","editt")
    var edittext=document.createTextNode("Edit")
    

    del.appendChild(deltext)
    list.appendChild(del)
    editbtn.setAttribute("onClick",'edittask(event)')
    editbtn.appendChild(edittext)
    list.appendChild(editbtn)
    
}
}


function removetask(event){
    var rem=event.target.parentElement;
    rem.remove();
}



function edittask(event){
    var edit=event.target.parentElement.childNodes[0].textContent;
    task.value = edit;


    var update=document.createElement("button");
    update.appendChild(document.createTextNode("Update"));
    update.setAttribute("id","update")
    update.setAttribute("onclick",`updatetask()`)

    
  
   input.appendChild(update);

   console.log(li.id)
    

}


function updatetask() {
    var id=li.id
    var myedsit=document.getElementById("editt").parentElement.childNodes[0].textContent=task.value;
    
    // edit.parentElement;
    task.value="";
    update.style.display="none"; 
}
