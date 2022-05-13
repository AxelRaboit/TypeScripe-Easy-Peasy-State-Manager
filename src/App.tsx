import React from "react";
import { EasyPeasyTodos } from "./components/EasyPeasyTodos";

function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-zinc-900 to-stone-900">
      <div className="container px-4 pt-40 mx-auto">
        <div className="flex justify-center h-full">
          <EasyPeasyTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
