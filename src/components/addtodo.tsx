import { useState, type FormEvent } from "react";

type sendProps = {
    onAddTodo: (task: string) => void;
};

const AddTodo = ({ onAddTodo }: sendProps) => {
    const [text, setText] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!text.trim()) return;
        onAddTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-bold text-center text-gray-100">
                Todo App
            </h1>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a todo..."
                    className="
        flex-1 px-3 py-2 rounded-lg
        bg-gray-700 border border-gray-600
        text-gray-100 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
      "
                />

                <button
                    type="submit"
                    className="
        bg-blue-600 hover:bg-blue-700
        text-white px-4 py-2 rounded-lg
        transition
      "
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
