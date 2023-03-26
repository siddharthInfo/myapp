import React,{useReducer} from 'react'


   const initialTodo = [{id:1,title:'project1',complete:true},{id:2,title:'project2',complete:true}];
    
   const reducer = (state,action)=>{
    switch(action.type){
        case"complete":
        return state.map((todo)=>{
            if(todo.id === action.id){
                return {...todo,complete: !todo.complete};
            }
            else{
                return todo;
            }
        });
        default:
            return state;
    }
   };

   function Reducer(){
    const [todos,dispatch] = useReducer(reducer,initialTodo);
    const handlecomplete = (todo)=>{
        dispatch({type:'Complete',id:todo.id});
    };

    
    return(<>{todos.map((todo)=>(<div key={todo.id}>
        <label>
            <input type="checkbox" checked={todo.complete} onChecked = {()=>handlecomplete(todo)}></input>
            {todo.title}
        </label>
    </div>))}</>)
   }


  
export default Reducer
