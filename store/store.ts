import { create } from "zustand";
import { Task } from "@/interfaces/task";

interface TasksState {
  tasks: Task[];
  addNewTask: (newTask: Task) => void;
  updateTask: (idTask: string) => void;
  deleteCompleteTasks: () => void;
}

export const useStore = create<TasksState>((set) => ({
  tasks: [],
  addNewTask: (newTask) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
  updateTask: (idTask) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id === idTask ? { ...el, status: "complete" } : el
      ),
    })),

  deleteCompleteTasks: () =>
    set((state) => ({
      tasks: state.tasks.filter((el) => el.status !== "complete"),
    })),
}));
