import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

//Left and Right components represents left and right div in the design

function App() {
  return (
    <div className="bg-sky-blue flex justify-center items-center w-screen h-screen">
      <Left />
      <Right />
    </div>
  );
}

export default App;
