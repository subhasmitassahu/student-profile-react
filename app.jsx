import React from "react";

function Student(props) {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>College: {props.college}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Student
        name="Subhasmita"
        course="B.Tech CSE"
        college="GIT University"
      />

      <Student
        name="Smruti"
        course="B.Tech IT"
        college=" ___ University"
      />
    </div>
  );
}

export default App;