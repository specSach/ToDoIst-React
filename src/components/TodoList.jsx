import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {

  const {
    tasks = [],
  } = props

  const hasTasks = true

  return !hasTasks ? (
    <div className="todo__empty-message"></div>
  ) : (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
}

export default TodoList