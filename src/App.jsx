import { useState , useEffect} from 'react'
import TodoItems from './components/TodoItems.jsx'
function App() {
  const [task,setTask ]= useState("");
  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [] );
  const tasksDyn = [...tasks];
  // 
  const handleTask = (event)=>{
    setTask(event.target.value);
    console.log(task);
  }
  // 
  const addTask = (event)=>{
    event.preventDefault();
    const taskAdd = {
      id: tasks.length === 0 ? 1 :  tasks[tasks.length - 1].id + 1,
      task:task,
      done:false
    }
    tasksDyn.push(taskAdd);
    setTasks(tasksDyn);
  }
  // 
  const deleteTask = (id)=>{
    setTasks(tasksDyn.filter((todo)=>todo.id !== id));
  }
  // 
  const doneTask = (id)=>{
    console.log(tasksDyn)
    tasksDyn.forEach((todo)=>{
      if(todo.id===id){
          todo.done = !todo.done;
      }
    })
    setTasks(tasksDyn)
  }
  // 
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  // 
  return (
    <div className="App">
      
<div className="h-screen w-full flex items-center justify-center bg-slate-100 font-sans">
	<div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="text-gray-800 text-lg font-bold">Todo List</h1>
            <form className="flex mt-4" onSubmit={addTask}>
              
                <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" onChange={handleTask} />
                <button type='submit' className="flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
            </form>
        </div>
        <div className="tasks_list">
      <TodoItems tasks = {tasks} doneTask={doneTask} deleteTask={deleteTask} />
        
      </div>
    </div>
</div>
      
    </div>
  )
}

export default App
