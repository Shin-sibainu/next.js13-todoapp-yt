"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const router = useRouter();

  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ id: uuidv4(), text: newTaskValue });
    setNewTaskValue("");

    router.refresh();
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        value={newTaskValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTaskValue(e.target.value)
        }
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="New task..."
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add task
      </button>
    </form>
  );
}
