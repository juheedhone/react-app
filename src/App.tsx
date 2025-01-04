import { useEffect } from "react";

const connect = () => console.log("connecting");
const Disconnect = () => console.log("Disconnecting");

const App = () => {
  useEffect(() => {
    connect();

    return () => Disconnect();
  });

  return (
    <div>
      <input type="text" className="form-control" />
    </div>
  );
};

export default App;
