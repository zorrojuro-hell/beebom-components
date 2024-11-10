import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading title="one" description="this is a test" />
    <Heading name="Ajinkya" />
  </>
);

function Heading(props) {
  console.log(props);

  const styles = {
    color: "red",
    fontWeight: "normal",
  };

  return (
    <div>
      <h1 style={styles}>Hello World</h1>
      <h3 style={{ color: "green" }}>
        Today is {new Date().toLocaleDateString()}
      </h3>
    </div>
  );
}
