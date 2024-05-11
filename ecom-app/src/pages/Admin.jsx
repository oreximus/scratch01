import { Navbar, Footer } from "../components";
import React, { useState, useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.price}</td>
                <td>{d.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
