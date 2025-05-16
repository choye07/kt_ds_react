import { useCallback, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";

export default function TaskContextWrapper() {
  const { done, allDone, add, todoLists } = useContext(TaskContext);

  const cashedAdd = useCallback(add, []);
  const cahedAllDone = useCallback(allDone, []);
  return (
    <>
      <TaskList onDone={done} onAllDone={cahedAllDone} todoLists={todoLists} />
      <TaskAppender onAdd={cashedAdd} />
    </>
  );
}
