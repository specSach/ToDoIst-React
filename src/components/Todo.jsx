import TodoTitle from "./TodoTitle.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
  return (
    <div className="todo">
      <TodoTitle/>
      <AddTaskForm/>
      <SearchTaskForm/>
      <TodoInfo/>
      <TodoList/>
    </div>
  )
}

export default Todo