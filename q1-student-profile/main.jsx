import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Student({ name, course, college }) {
  return (
    <article className="student-card">
      <h2>Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>College:</strong> {college}</p>
    </article>
  );
}

function App() {
  return (
    <main className="page">
      <p className="eyebrow">Practical Question 1</p>
      <h1>Student Profiles</h1>
      <section className="student-grid">
        <Student
          name="Vaishnavi"
          course="B.Tech CSE"
          college="GIT University"
        />
        <Student
          name="Rahul"
          course="B.Tech IT"
          college="ABC University"
        />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
