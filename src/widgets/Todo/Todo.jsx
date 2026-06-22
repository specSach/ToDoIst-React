import { useContext } from "react";
import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import TodoInfo from "@/features/stats";
import { TodoList } from "@/entities/todo";
import TodoTitle from "@/shared/ui/TodoTitle";
import Button from "@/shared/ui/Button";
import { TasksContext } from "@/entities/todo";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <TodoTitle styles={styles} />
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
