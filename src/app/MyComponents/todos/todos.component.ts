import { Component,OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  name="teja";
  todos:Todo[];
  
  constructor(){
    let localItem=localStorage.getItem("todos");
    if(localItem==null)
    {
      this.todos=[];
    }
    else  
    {
      console.log(localItem);
      
      this.todos=JSON.parse(localItem);
    }
    
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    let i=this.todos.indexOf(todo);
    this.todos.splice(i,1);
    
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo: Todo)
  {
    console.log(todo);
    let flag=false;
    for(let i=0;i<this.todos.length;i=i+1)
    {
      if(this.todos[i]===todo)
      {
        flag=true;
        break;
      }
    }
    if(flag===false)
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  checkBoxtodo(todo: Todo){
    console.log("teja ram lokam");
    
    for(let i=0;i<this.todos.length;i=i+1)
    {
      console.log(i);
      
      if(this.todos[i]===todo)
      {
        this.todos[i].active=!this.todos[i].active;
        break;
      }
    }

  }
  ngOnInit(): void {
    
  }
}
