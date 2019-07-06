var todo=document.getElementById("todo");
var todoList=document.getElementById("todos");
function addTodo(){
 let string=todo.value;
 let todoId=(todoServices.todoID())+1;
 let button=`<button id="btn" type=button>Delete</button>`;
 let newTodo={
 	task: string,
 	status: 'false'
 }
 todoServices.addTodo(newTodo);
 html=`<li>${todoId}. ${newTodo.task} ${button}</li>`;
 var item=this.parseHtml(html);
 todoList.appendChild(item); 
};
function parseHtml(html){
	var t=document.createElement('template');
	t.innerHTML=html;
    return t.content.cloneNode(true)
    }








