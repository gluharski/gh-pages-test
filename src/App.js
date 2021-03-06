import { useState, useEffect } from "react";
import "./App.css";

import Clients from "./Clients";

function App() {
  const [users, setUsers] = useState([]);

  const data = () => {
    fetch(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Balance</th>
          <th>Created</th>
        </tr>
        <tbody>
          {users.map((data) => (
            <Clients data={data} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
