import { Task } from "@/types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" }); //getserversideprops
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};
