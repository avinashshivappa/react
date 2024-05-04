import React from "react";
import { useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState(["Avinash", "Ramya"]);
  const [data, setData] = useState("");

  const addToTask = () => {
    // !toDo.includes(data) && data.length > 0
    //   ? setToDo([...toDo, data]):
    //    setData("")

    if (!toDo.includes(data) && data.length > 0) {
      setToDo([...toDo, data]);
    }
    setData("");
  };

  function deleteTask(i) {
    setToDo(toDo.filter((j) => j != i));
  }

  function deleteAll() {
    setToDo([]);
  }

  return (
    <div>
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            addToTask();
          }
        }}
      />
      <button onClick={addToTask}>Add task</button>
      <button onClick={deleteAll}>Delete all</button>
      <ul>
        {toDo.map((i) => {
          return (
            <li key={i}>
              <h2>{i}</h2>
              <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
