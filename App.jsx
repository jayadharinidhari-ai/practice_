import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentProfile from "./components/StudentProfile";

function App() {

  const [count, setCount] = useState(0);

  const [show, setShow] = useState(true);

  return (
    <div>
      <Header />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      {show && (
        <StudentProfile
          name="Anu"
          department="CSE"
          year="3rd Year"
          count={count}
          increase={() => setCount(count + 1)}
          reset={() => setCount(0)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;