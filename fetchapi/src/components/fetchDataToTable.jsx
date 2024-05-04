import React, { useEffect, useState } from "react";
const URL = "https://reqres.in/api/users";

const FetchDataToTable = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) =>  setDatas(data.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((item) => (
          <tr>
            <td>{`${item.first_name} ${item.last_name}`}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FetchDataToTable;
