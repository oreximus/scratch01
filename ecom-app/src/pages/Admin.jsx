import { Navbar, Footer } from "../components";
import React, { useState, useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {data}
      <Footer />
    </>
  );
};

export default Admin;
