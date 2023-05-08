import { Routes, Route } from "react-router-dom";
import Todo from "./component/Todo";
import Greet from "./component/Greet";
import { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UseContext from "./component/UseContext";
import Home from "./component/Home";
import Counter from "./component/Counter";
import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Createvlog from "./component/Createvlog";
import Vlogtitle from "./component/Vlogtitle";
import Contentvlog from "./component/Contentvlog";

export const AppContext = createContext();
function App() {
  const [state, setState] = useState(true);
  const [frmdata,setFrmdata] = useState([])

  return (
    <>
      {/* <h1>Welcome to react</h1> */}
      <AppContext.Provider value={{ state, setState,frmdata,setFrmdata}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/context" element={<UseContext />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createvlog" element={<Createvlog/>  } />
          <Route path="/vlogetitle" element={<Vlogtitle/>} />
          <Route path="/content/:id" element={<Contentvlog/>} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
