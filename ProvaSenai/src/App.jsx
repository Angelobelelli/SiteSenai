import "./App.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <Outlet />
      <Link to="/home">Home</Link>
    </>
  );
}

export default App;
