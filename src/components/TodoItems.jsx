import Todo from "./Todo.jsx";
function TodoItems({ tasks , doneTask, deleteTask }) {
  return (
    <div>
      {tasks.map((todo) => (
        <Todo key={todo.id} todo={todo} doneTask={doneTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TodoItems;
