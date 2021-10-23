import React from "react";

const Todo = ({ done, description, index, onChangeTodo, onDeleteTodo }) => {
  return (
    <div
      className={
        done
          ? "p-2 flex justify-between items-center bg-green-600"
          : "p-2 flex justify-between items-center bg-red-500"
      }
    >
      {done}
      <h1
        onClick={() => {
          onChangeTodo(index);
        }}
        className={
          done
            ? `text-lg font-semibold cursor-pointer text-white line-through`
            : "text-lg font-semibold cursor-pointer text-white"
        }
      >
        {description}
      </h1>
      <button
        className="bg-gray-600 text-white py-2 px-4 hover:bg-gray-800"
        onClick={() => {
          onDeleteTodo(index);
        }}
      >
        Löschen
      </button>
    </div>
  );
};

export default Todo;
