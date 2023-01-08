import React, { useState, useEffect } from 'react';
import './Todo.css';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            const data = await response.json();
            setTodos(data);
        };

        fetchTodos();
    }, []);

    const handleTodoChange = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: newTodo,
                completed: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        setTodos([...todos, data]);
        setNewTodo('');
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label>
                    New Todo:
                    <input type="text" value={newTodo} onChange={handleNewTodoChange} />
                </label>
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleTodoChange(todo.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;


