import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios
      // .get("http://localhost:3000/api/fruits")
      .get("/api/fruits")
      .then((response) => {
        setFruits(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <h1>Hello FullStack!</h1>
      <h4>
        a simple app to learn how to create backend server and then attach it to
        the frontend
      </h4>
      <p>FRUITS: {fruits.length} </p>
      {fruits.map((fruit, index) => (
        <div key={fruit.id}>
          <h3>{fruit.title}</h3>
          <p>{fruit.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
