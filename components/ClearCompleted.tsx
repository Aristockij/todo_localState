"use client";

import { Task } from "@/interfaces/task";
import { useState, useEffect } from "react";
import { useStore } from "@/store/store";

const ClearCompleted = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const tasks = useStore((state) => state.tasks);
  const clearAllArchiveData = useStore((state) => state.deleteCompleteTasks);

  useEffect(() => {
    setDisableBtn(!tasks.some((el: Task) => el.status === "complete"));
  }, [tasks]);

  return (
    <button
      className={
        disableBtn
          ? "bg-gray-300 rounded-md pl-2 pr-2 "
          : "bg-cyan-300 rounded-md pl-2 pr-2"
      }
      onClick={clearAllArchiveData}
      disabled={disableBtn}
    >
      Clear completed
    </button>
  );
};
export default ClearCompleted;
