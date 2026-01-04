import type { Todo } from "../store/todo";

type propList = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: propList) => {
    return (
        <ul className="space-y-3">
          

            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="
        flex items-center gap-3 p-3 rounded-lg
        bg-gray-700 border border-gray-600
      "
                >
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => onToggle(todo.id)}
                        className="accent-blue-500"
                    />

                    <span
                        className={`flex-1 ${
                            todo.isComplete
                                ? "line-through text-gray-400"
                                : "text-gray-100"
                        }`}
                    >
                        {todo.task}
                    </span>

                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-400 hover:text-red-500 text-sm"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
