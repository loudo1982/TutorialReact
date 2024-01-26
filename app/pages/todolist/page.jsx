"use client"
import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Puedes cargar las tareas desde un servidor o almacenamiento local aquí
    // Por ahora, simplemente cargamos un ejemplo
    setTasks([
      { id: 1, text: 'Hacer la tarea 1' },
      { id: 2, text: 'Hacer la tarea 2' },
      { id: 3, text: 'Hacer la tarea 3' },
    ]);
  }, []);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 p-2 mr-2"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={addTask}
        >
          Agregar
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b border-gray-300 py-2"
          >
            {task.text}
            <button
              className="text-red-500"
              onClick={() => removeTask(task.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
