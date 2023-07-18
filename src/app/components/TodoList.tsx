import { Task } from "@/types/tasks";
import Todo from "./Todo";

interface TodoListProps {
  tasks: Task[];
}

export default function ToDoList({ tasks }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {/* <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 1</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 2</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li> */}
      {tasks.map((task) => (
        // <li
        //   key={task.id}
        //   className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
        // >
        //   <span className="text-gray-700">{task.text}</span>
        //   <button className="text-red-500 hover:text-red-700">✖</button>
        // </li>
        <Todo key={task.id} task={task} />
      ))}
    </ul>
  );
}
