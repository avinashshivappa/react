import React, { useEffect, useState } from "react";

const Fetchapi = () => {
  
  function Something() {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setSome([...some,  data]));
    //   use array beacause map doesnt work without array data
  }
  const [some, setSome] = useState([]);
  useEffect(() => {
    Something();
  }, []);

  return (
    <>
      <ul>
        {/* always return when using map */}
        {some.map((som)=>{
            return <h3 key={som.key}>{som.activity}</h3>
        })}
      </ul>
      <button onClick={Something}>Load</button>
    </>
  );
};

export default Fetchapi;
