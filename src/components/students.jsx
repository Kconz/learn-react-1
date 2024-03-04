import React from "react";
import "../App.css";


function students(props) {
  const { students, deleteStudent, toggle, show } = props;
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>จำนวนนักเรียน ({students.length})</h2>
        <button
          onClick={toggle}
          style={{ background: show ? "#444" : "green" }}
        >
          {show ? "hide" : "show"}
        </button>
      </div>
      <div className="student-list-box">
        <ul>
          {/* show if true will display students list if it false not display */}
          {show &&
            students.map((item) => (
              <li
                key={item.id}
                className="table"
                // filter gender by boxShadow color 
                style={{
                  boxShadow:
                    item.gender === "male"
                      ? "greenyellow 0px 1px 4px"
                      : "pink 0px 1px 4px",
                }}
              >
                <h2>
                  {/* รหัสนักเรียน: {item.id} - */}
                  {item.name} 
                  {/* - {item.gender} */}
                </h2>
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
