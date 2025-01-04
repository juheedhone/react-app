import { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  // After Render
  useEffect(() => {});

  useEffect(() => {
    document.title = "my App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
