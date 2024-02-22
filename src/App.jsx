import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Students from "./components/students";
import Header from "./components/header";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "Frong" },
    { id: 2, name: "Kconz" },
    { id: 3, name: "Daeng" },
  ]);
  const [show, setShow] = useState(true);

  const deleteStudent = (id) => {
    setStudent(students.filter((student) => student.id !== id));
  };
  const toggle = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <>
      <Header viteLogo={viteLogo} reactLogo={reactLogo}/>
      <Students
        students={students}
        deleteStudent={deleteStudent}
        toggle={toggle}
        show={show}
      />
    </>
  );
}

export default App;
