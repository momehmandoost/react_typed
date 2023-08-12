import { useState } from "react";
import CountUp from "react-countup";
import "./App.css";
import Typed from "react-typed";
import { Nav } from "./Componets/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <Nav />
      </div>
      <div className="center">
        <div className="text">
          <h1>Front-end Development</h1>
          <h2>Hi.I'M Mohammad Mehmandoost</h2>
          <h3>
            Years of experience: <CountUp start={0} end={100} />
          </h3>
          <h3>
            You can find:
            <Typed
              strings={["React", "Redux", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
