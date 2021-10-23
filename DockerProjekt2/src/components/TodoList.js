import React from "react";
import Todo from "./Todo";
import { useState, useEffect, useRef } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("todos");
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  // const [todo, addItem] = useState("");
  const [opencount, countOpen] = useState(todos.length);
  const todoInputRef = useRef();

  useEffect(() => {
    const donetodos = todos.filter((item) => {
      return !item.done;
    });
    countOpen(donetodos.length);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submit = (e) => {
    if (todoInputRef.current.value.trim() === "") {
      return;
    }
    e.preventDefault();
    const newTodos = [
      ...todos,
      { description: todoInputRef.current.value, done: false },
    ];
    setTodos(newTodos);
    todoInputRef.current.value = "";
  };

  // const addTodo = (e) => {
  //   addItem(e.target.value);
  // };

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 py-4 text-white">
        <h1 className="text-3xl font-semibold">Todolist</h1>
        {todos.length === 0 ? (
          <h2 className="text-xl">Bravo, Keine Todos!</h2>
        ) : (
          <h2 className="text-xl">
            Du hast noch {todos.length} todos übrig, {opencount} sind davon
            offen
          </h2>
        )}

        <div className="grid grid-cols-3 p-4">
          <input
            type="text"
            // onChange={addTodo}
            // value={todo}
            ref={todoInputRef}
            placeholder="Neues todo..."
            className="col-span-2 p-2 text-black"
          ></input>
          <button
            className="col-span-1 bg-gray-300 text-black"
            onClick={submit}
          >
            Add Todo
          </button>
        </div>
      </div>

      {todos.map((item, index) => {
        return (
          <Todo
            key={index}
            description={item.description}
            done={item.done}
            index={index}
            onChangeTodo={changeTodo}
            onDeleteTodo={deleteTodo}
          ></Todo>
        );
      })}
    </div>
  );
};

export default TodoList;
