import React from "react";
import "./AddForm.css";
import { useState } from "react";

function AddForm(props) {
  const { students, setStudent } = props;
  const [name, setName] = useState("");
  const [gender,setGender] = useState("male");

  const registerStudent = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter data");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender
      };
      //insert data student (update list)
      setStudent([...students, newStudent]);
    }
    setName("");
    setGender("male");
  };
  return (
    <section className="wrapper-form">
      <h3 className="topic-form">ลงทะเบียน</h3>
      <form className="add-form" onSubmit={registerStudent}>
        <input
          type="text"
          placeholder="ชื่อนักเรียน"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e)=>setGender(e.target.value)} className="selection">
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
        </select>
        <button className="btn-save" type="submit">
          บันทึก
        </button>
      </form>
    </section>
  );
}

export default AddForm;
