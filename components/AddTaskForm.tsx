"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useStore } from "@/store/store";

const AddTaskForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const [title, setTitle] = useState("");

  const addTasks = useStore((state: any) => state.addNewTask);

  const addActive = () => {
    const id = crypto.randomUUID();
    const newTask = { id, title, status: "active" };

    addTasks(newTask);

    setTitle("");
  };

  useEffect(() => {
    if (title.length > 0) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [title.length]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addActive();
      }}
    >
      <div className='relative'>
        <input
          type='text'
          value={title}
          className='outline-none border border-slate-950  pl-10 h-8 w-full '
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type='submit'
          className={
            disableBtn
              ? " pl-1 pr-2 mt-2 rounded-lg absolute bottom-0 left-0  h-full "
              : " pl-1 pr-2 mt-2 rounded-lg absolute bottom-0 left-0  h-full "
          }
          disabled={disableBtn}
        >
          <ChevronDown color={disableBtn ? "gray" : "black"} size={25} />
        </button>
      </div>
    </form>
  );
};
export default AddTaskForm;
