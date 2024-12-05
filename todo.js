 const todoList = [
  {item : 'pizza',dueDate : '2024/4/7'},
  {item : 'momo',dueDate : '2024/6/10'},
 ];
DisplayTodo();
 

 function addTodo(){
    const inputElement = document.querySelector('.tt');
    const TodoDate = document.querySelector('.dd');
    const tododatev = TodoDate.value;
    const nitish = inputElement.value;
    todoList.push({item:nitish,dueDate:tododatev});
    console.log( nitish )
    inputElement.value = '';
    TodoDate.value = '';
    DisplayTodo();
 
 }
 function DisplayTodo(){
   const containerElement = document.querySelector('.todo-container');
   let newHtml = ''
   for(let i=0; i < todoList.length; i++){
      const{item,dueDate} = todoList[i];
      newHtml += `

      <span>${item}</span>
      <span>${dueDate}</span>
      <button  class="todobtn" onclick="todoList.splice(${i}, 1);
      DisplayTodo();
      
      ">Delete</button>
      
      `;
   }
   containerElement.innerHTML = newHtml;
 }
    