import TodoTitle from "./TodoTitle.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {

  const tasks = [
    {id: 'task-1', title: 'Купить молоко', isDone: false},
    {id: 'task-2', title: 'Погладить кота', isDone: true},
  ]

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи!')
  }

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'Выполнено' : 'Не выполнено'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log('Задача добалена!')
  }

  return (
    <div className="todo">
      <TodoTitle/>
      <AddTaskForm
        addTask={addTask}
      />
      <SearchTaskForm
        onSearchInput={filterTasks}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTasksCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo