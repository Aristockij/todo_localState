"use client";

import { Task } from "@/interfaces/task";
import { Circle, CircleCheckBig } from "lucide-react";
import ClearCompleted from "@/components/ClearCompleted";
import { useState, useEffect } from "react";
import { useStore } from "@/store/store";

const ActiveTaskList = () => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const taskList = useStore((state) => state.tasks);
  const updateTaskState = useStore((state) => state.updateTask);

  const startComplete = (id: string) => {
    updateTaskState(id);
  };

  const activeTaskCount =
    taskList?.filter((el: Task) => el.status === "active").length || 0;

  const filteredTasks =
    taskList?.length > 0
      ? taskList.filter((task: Task) => {
          if (filter === "active") return task.status === "active";
          if (filter === "completed") return task.status === "complete";
          return true;
        })
      : [];

  return (
    <>
      <ul>
        {filteredTasks.map((el: Task) => (
          <li
            key={el.id}
            onClick={() => startComplete(el.id)}
            className='relative border border-black pl-10 pt-1 pb-1 cursor-pointer'
          >
            <div className='absolute left-1'>
              {el.status === "active" ? <Circle /> : <CircleCheckBig />}
            </div>
            <div>{el.title}</div>
          </li>
        ))}
        {filteredTasks.length === 0 && <span>Not any tasks</span>}
      </ul>
      <div className='flex justify-between pt-5'>
        <div>{activeTaskCount}: items left</div>
        <div>
          <button
            className={
              filter == "all"
                ? "border border-amber-400 p-1 "
                : "border border-transparent p-1 "
            }
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={
              filter == "active"
                ? "border border-amber-400 p-1 mr-2 ml-2 "
                : "border border-transparent p-1 mr-2 ml-2"
            }
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={
              filter == "completed"
                ? "border border-amber-400 p-1 "
                : "border border-transparent p-1"
            }
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div>
          <ClearCompleted />
        </div>
      </div>
    </>
  );
};
export default ActiveTaskList;
