import { useRef } from "react";

const App = () => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    console.log(ref.current?.value);
  };

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
    </main>
  );
};

export default App;
