

function Todo({todo , doneTask, deleteTask }){
    return(
        <div className="flex mb-4 items-center">
        <p className={`w-full ${!todo.done ? 'text-grey-darkest' : 'line-through text-green-500'}` }>{todo.task}</p>
        <button className=" p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500" onClick={()=>doneTask(todo.id)}>{todo.done ? 'Not' : 'Done'}</button>
        <button className=" p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={()=>deleteTask(todo.id)}>Remove</button>
    </div>
    )
}
export default Todo