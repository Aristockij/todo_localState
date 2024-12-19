"use client";

import { useState, useEffect } from "react";
import { useStore } from "@/store/store";
import Input from "@/components/Input";
import Button from "@/components/Button";

const AddTaskForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);

  const [title, setTitle] = useState("");

  const addTasks = useStore((state) => state.addNewTask);

  const addActive = () => {
    const id = crypto.randomUUID();
    const newTask = { id, title, status: "active" };
    addTasks(newTask);
    setTitle("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

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
        <Input value={title} setValue={handleInputChange} />
        <Button disableBtn={disableBtn} />
      </div>
    </form>
  );
};
export default AddTaskForm;
