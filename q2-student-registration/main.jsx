import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const [submittedStudent, setSubmittedStudent] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedStudent(form);
  }

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Practical Question 2</p>
        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Course
            <input name="course" value={form.course} onChange={handleChange} required />
          </label>
          <button type="submit">Register Student</button>
        </form>
        {submittedStudent && (
          <section className="result">
            <h2>Submitted Student Details</h2>
            <p><strong>Name:</strong> {submittedStudent.name}</p>
            <p><strong>Email:</strong> {submittedStudent.email}</p>
            <p><strong>Course:</strong> {submittedStudent.course}</p>
          </section>
        )}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
