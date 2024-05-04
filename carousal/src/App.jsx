import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3",
  },
];

function App() {
  const [count, setCount] = useState(0);
  function next() {
    if (count === items.length - 1) {
      setCount(0);
    } else {
      setCount((cur) => cur + 1);
    }
  }
  function prev() {
    if (count === 0) {
      setCount(items.length - 1);
    } else {
      setCount((cur) => cur - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <img width={200} height={200} src={items[count].imageUrl} />
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </>
  );
}

export default App;
