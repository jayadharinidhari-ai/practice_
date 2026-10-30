import { useEffect } from "react";

function StudentProfile({ name, department, year, count, increase, reset }) {

  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>

      <h3>Practice Count: {count}</h3>

      <button onClick={increase}>Complete Practice</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default StudentProfile;