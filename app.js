let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");




btn.addEventListener("click",function(){
    if(inp.value.trim()==""){
        alert("Enter new task");
        return;
    }
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let delBtn=document.createElement("button");
    delBtn.classList.add("delete");

     let delIcon=document.createElement("img");
     delIcon.src="close.png"
    delBtn.appendChild(delIcon);
    item.appendChild(delBtn);
  


    ul.appendChild(item);
    inp.value="";
    setTimeout(() => {
        alert("New task is added!");
    }, 100);
});



ul.addEventListener("click", function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName=="IMG" || event.target.nodeName=="BUTTON"){
       let par=event.target.parentElement.parentElement;
       par.remove();
       console.log("deleted");
       setTimeout(() => {
        alert("your task has been completed!");
    }, 100);
    }
});

