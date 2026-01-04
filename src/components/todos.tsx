import AddTodo from "./addtodo";
import type { Todo } from "../store/todo";
import { useState, useEffect } from "react";
import TodoList from "./todolist";

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleTodo = (task: string) => {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), task, isComplete: false },
        ]);
    };

    const handleToggle = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="w-full max-w-md bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 space-y-6">
            <AddTodo onAddTodo={handleTodo} />
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Todos;
