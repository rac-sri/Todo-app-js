var  items=[{id:1,task:'First Input', edit:false, status:false},
            {id:2,task:'Second Input', edit:false, status:false},
            {id:3,task:'Third Input', edit:false, status:false}
           ];

 var todoServices= 	{
 	addTodo:function(el){
 		el.id=items.length+1;
 		items=[...items,el];
 	},
 	todoID:function(){
 		return items.length;
 	},
 
   render:function(){
   	let length=todoServices.todoID();
   	html="";

   	let button=`<button id="btn" type=button>Delete</button>`;
   	for(let i=0;i<length;)
   	{
   	 task=items[i].task;
     html+=`<li>${++i}. ${task} ${button}</li>`;
   	}
    todoList.innerHTML=html;
   }
};
todoServices.render();