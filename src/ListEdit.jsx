import React, { useState } from 'react';

const TodoList = ({ todos, onEditTodo }) => {
  const [editedTodo, setEditedTodo] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEdit = (todoId) => {
    setEditId(todoId);
    setEditedTodo(todos.find((todo) => todo.id === todoId).text);
  };

  const saveEdit = () => {
    if (editedTodo.trim() === '') return;
    onEditTodo(editId, editedTodo);
    setEditId(null);
    setEditedTodo('');
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
