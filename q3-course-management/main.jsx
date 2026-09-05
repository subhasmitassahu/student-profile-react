import React, { createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./styles.css";

const StudentContext = createContext(null);
const courses = [
  { id: "react", title: "React Development", description: "Build modern component-based web applications." },
  { id: "javascript", title: "JavaScript Fundamentals", description: "Learn the language behind interactive web pages." },
];

function useStudent() {
  return useContext(StudentContext);
}

function Layout() {
  const student = useStudent();
  return (
    <div className="app-shell">
      <header>
        <Link className="brand" to="/">Course Manager</Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <span className="student-badge">{student.name}</span>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  const student = useStudent();
  return <main className="content"><p className="eyebrow">Welcome back</p><h1>Hello, {student.name}</h1><p>Explore your available courses and continue learning.</p><Link className="button" to="/courses">Browse Courses</Link></main>;
}

function Courses() {
  return <main className="content"><h1>Courses</h1><div className="course-grid">{courses.map((course) => <article className="course-card" key={course.id}><h2>{course.title}</h2><p>{course.description}</p><Link to={`/course/${course.id}`}>View course</Link></article>)}</div></main>;
}

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);
  if (!course) return <main className="content"><h1>Course not found</h1><Link to="/courses">Back to courses</Link></main>;
  return <main className="content"><p className="eyebrow">Course details</p><h1>{course.title}</h1><p>{course.description}</p><Link to="/courses">Back to courses</Link></main>;
}

function About() {
  const student = useStudent();
  return <main className="content"><h1>About</h1><p>This application demonstrates React Router and the Context API.</p><p>Shared student: <strong>{student.name}</strong> ({student.course})</p></main>;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentContext.Provider value={{ name: "Vaishnavi", course: "B.Tech CSE" }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </StudentContext.Provider>
  </React.StrictMode>,
);
