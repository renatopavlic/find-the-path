import { useRef } from "react";
import { map2 } from "./consts/maps";
import { findPath } from "./core/pathfinder";

const App = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    console.log(ref.current?.value);
  };

  const result = findPath(map2);
  console.log(result);

  return (
    <main className="flex flex-col justify-center items-center bg-gray-200 h-screen">
      <h2 className="text-rose-500">Find the path</h2>
      <textarea ref={ref} className="w-80 h-80 border" />
      <button
        onClick={handleClick}
        className="bg-blue-200 px-2 py-1 rounded-lg"
      >
        Start
      </button>
      <div>
        <h2>Result</h2>
        <p>{result.letters}</p>
      </div>
      <div>
        <h2>Path</h2>
        <p>{result.path}</p>
      </div>
    </main>
  );
};

export default App;
