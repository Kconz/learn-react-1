import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Students from "./components/students";
import Header from "./components/header";
import AddForm from "./components/Form/AddForm";

function App() {
  const [students, setStudent] = useState([]);
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
      <Header viteLogo={viteLogo} reactLogo={reactLogo} />
      <div className="wrapper-content">
        <AddForm students={students} setStudent={setStudent} />
        <Students
          students={students}
          deleteStudent={deleteStudent}
          toggle={toggle}
          show={show}
        />
      </div>
    </>
  );
}

export default App;
