import { useState } from "react";
import "./App.css";

function App() {

  //initial values
  const [search, setSearch] = useState([
    "Avinash",
    "Ramya",
    "Lohith",
    "Rohini",
  ]);

//input typed text
  const [inputText,setInputText] = useState("")

  //filter from default value to typed values
  let result = search.filter((item)=>item.toLowerCase().includes(inputText.toLowerCase()))

  return (
    <>
      <input onChange={(e)=>setInputText(e.target.value)}/>
      {result.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
}

export default App;
