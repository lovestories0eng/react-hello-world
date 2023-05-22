import React from "react";
import { Button } from "./components/Button";
import "./styles.css";

const REACT = "react";

const COLORS = ["#000", "#f50", "darkblue"];

export default function App() {
  const [colorIndex, setColorIndex] = React.useState(0);

  return (
    <div className="App">
      <h1>Hello {REACT}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{`You can also use JavaScript expression in template`}</h3>
      <h3>
        My first Component is the "Button" below: <br />
        <Button
          color={COLORS[colorIndex % 3]}
          onClick={() => {
            setColorIndex(colorIndex + 1);
          }}
        >
          Try Click Me
        </Button>
      </h3>
    </div>
  );
}
