import { useState, useEffect, useRef } from 'react'
import TodoTitle from "./TodoTitle.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";
import Button from "./Button.jsx";

const Todo = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return []
  })

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
    }
  }

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
      setSearchQuery('')
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone }
        }

        return task
      })
    )
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect( () => {
    newTaskInputRef.current.focus()
  }, [])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter( ({ title }) => title.toLowerCase().includes(clearSearchQuery))
    : null

  return (
    <div className="todo">
      <TodoTitle/>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button
        onClick={ () => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Show first incomplete task
      </Button>
      <TodoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTasksCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default Todo