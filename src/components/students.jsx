import React from "react";
import "../App.css";

function students(props) {
  const { students, deleteStudent, toggle, show } = props;
  return (
    <>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h2>จำนวนนักเรียน ({students.length})</h2>
          <button
            onClick={toggle}
            style={{ background: show ? "#444" : "green" }}
          >
            {show? 'hide': 'show'}
          </button>
        </div>

        <ul>
          {/* show if true will display students list if it false not display */}
          {show &&
            students.map((item) => (
              <li key={item.id} className="table">
                <p>
                  รหัสนักเรียน: {item.id} - {item.name}
                </p>
                <button
                  className="btn-alert"
                  onClick={() => deleteStudent(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default students;
