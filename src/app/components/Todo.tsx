import { Task } from "@/types/tasks";

interface TaskProps {
  task: Task;
}

export default function Todo({ task }: TaskProps) {
  return (
    <li
      key={task.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      <span className="text-gray-700">{task.text}</span>
      <button className="text-red-500 hover:text-red-700">✖</button>
    </li>
  );
}
