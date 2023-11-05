import React, { useState, useEffect } from "react";

function UserTable() {
  const [data, setData] = useState();
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setData(() => {
      return data.map((entry) => {
        return (
          <div className="item">
            <div key={entry.id}>{entry.id}</div>
            <div key={entry.id}>{entry.name}</div>
            <div key={entry.id}>{entry.email}</div>
            <div key={entry.id}>{entry.phone}</div>
            <div key={entry.id}>{entry.website}</div>
          </div>
        );
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return <div className="container">{data}</div>;
}
//https://jsonplaceholder.typicode.com/users
export default UserTable;
