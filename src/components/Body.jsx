import React, { useState } from "react";
import EditImg from "../assets/edit.png";
import DeleteImg from "../assets/delete.png";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  // States
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const btnCss =
    "bg-violet-800 hover:bg-violet-900 text-white px-4 py-1 rounded-md mx-2 font-bold";

  const inputCss =
    "w-3/4 border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:border-blue-500 mt-3";

  const imgCSS = "w-4 cursor-pointer transition transform hover:scale-110";

  // Adding the todos
  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), todo, isDone: false },
    ]);
    setTodo("");
  };

  // Handling onChange event in input
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Hancling Checkboxes
  const handleCheckbox = (e) => {
    let id = e.target.name;
    // finding the index of the todos
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    // storing the todos into new todos
    let newTodos = [...todos];

    // toggling the values of selected todos, selected with the help of index
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  // Handling Delete
  const handleDelete = (e, id) => {
    const isSure = window.confirm("Are you sure you want to delete this todo?");
    if (isSure) {
      let newTodos = todos.filter((item) => {
        return item.id !== id;
      });
      setTodos(newTodos);
    }
  };

  // Handling Edit todos
  const handleEdit = () => {};

  return (
    <>
      <div className="mx-3 my-3 bg-violet-200 p-5 rounded-2xl h-auto max-h-[70rem] ">
        <div className="addTodos my-3">
          <h2 className="font-bold text-2xl text-black">Add your Todo</h2>

          <input
            className={inputCss}
            onChange={handleChange}
            type="text"
            value={todo}
            id=""
          />
          <button onClick={handleAdd} className={btnCss}>
            Save
          </button>
        </div>
        <hr className="my-1" />
        <h2 className="font-bold text-2xl text-black">My Todos</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="my-2 font-bold">No todos to display.</div>
          )}
          {todos.map((items) => {
            return (
              <div
                key={items.id}
                className="my-2 todo flex items-center justify-between px-5"
              >
                <div className="flex gap-4">
                  <input
                    onChange={handleCheckbox}
                    value={items.isDone}
                    type="checkbox"
                    name={items.id}
                    id=""
                  />
                  <div className={`${items.isDone ? "line-through" : ""} `}>
                    {items.todo}
                  </div>
                </div>
                <div>
                  <div className="buttons flex gap-5">
                    <img
                      onClick={(e) => handleEdit(e, items.id)}
                      className={imgCSS}
                      src={EditImg}
                      alt="Add"
                    />
                    <img
                      onClick={(e) => {
                        handleDelete(e, items.id);
                      }}
                      className={imgCSS}
                      src={DeleteImg}
                      alt="Delete"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
