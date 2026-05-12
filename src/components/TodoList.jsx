import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {

  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTasksCompleteChange,
  } = props

  const hasTasks = true

  return !hasTasks ? (
    <div className="todo__empty-message"></div>
  ) : (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTasksCompleteChange={onTasksCompleteChange}
          {...task}
        />
      ))}
    </ul>
  );
}

export default TodoList