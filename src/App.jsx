import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'ongoing', 'completed'

  const handleForm = (e) => {
    e.preventDefault();
    // Add a new todo with a completed property set to false
    setTodoList([...todoList, { todoName: todo, completed: false }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = todoList.filter((val) => val.todoName !== deleteValue);
    setTodoList(restTodoList);
  };

  const toggleTodoCompletion = (todoName) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.todoName === todoName) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case "ongoing":
        return todoList.filter((todo) => !todo.completed);
      case "completed":
        return todoList.filter((todo) => todo.completed);
      case "all":
      default:
        return todoList;
    }
  };

  return (
    <div className="App">
      <div className="bg-custom-bg  w-full h-screen flex flex-col items-center">
        <h1 className="text-5xl text-yellow-500 font-bold mb-4 mt-4 text-shadow">Todo List</h1>
          <h2 className="text-2xl text-yellow-500 font-bold mb-8 mt-4  relative">Carlo Nathanael Bessie 2602236685</h2>
        <div className="w-full flex items-center flex-col">
          <div className="w-[500px] mx-auto bg-red-900 p-5 border-yellow-500 border-solid border-4 relative mb-8 rounded-lg">
          <form onSubmit={handleForm} className="flex flex-col items-center">
            <div className="w-full">
              <input
                className="border-2 placeholder:text-gray-500 rounded-lg border-yellow-500 w-full p-5 mb-5 text-black"
                type="text"
                placeholder="Add Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="bg-light-brown text-white py-3 px-8 rounded-lg w-full border-yellow-500 border-2"
              >
                Add
              </button>
            </div>
          </form>
          </div>
          <div className="w-[500px] mx-auto bg-red-900 p-5 border-yellow-500 border-solid border-4 relative rounded-lg">
            <div className="mb-4 flex justify-start">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-yellow-500 text-white py-2 px-3 rounded-lg border-yellow-500 border-2"
              >
                <option value="all">All</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="todo-show-area">
              <ul>
              
  {
    getFilteredTodos().map((singleTodo, index) => {
      return (
        <li
          key={index}
          className={`mb-5 flex justify-between items-center rounded-lg text-xl px-3 ${
            singleTodo.completed
              ? "bg-light-brown border-2 border-yellow-500"
              : "bg-light-brown border-yellow-500 border-2"
          }`}
          style={{ minHeight: '2.5rem' }} // Slightly reduce the height
        >
          <div
            className="w-80 h-6 bg-white flex justify-left items-center rounded px-3" // Adjust width here and reduce height
            style={{ lineHeight: '1rem' }} // Adjust line height if necessary for text alignment
          >
            {singleTodo.todoName}
          </div>
          <span
            onClick={() => toggleTodoCompletion(singleTodo.todoName)}
            className="cursor-pointer text-gray-500"
          >
            {singleTodo.completed ? "Undo" : "Complete"}
          </span>
        </li>
      );
    })
  }
  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
