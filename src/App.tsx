import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        // setLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        // setLoading(false);
      })
      .finally(() => setLoading(false));

    // .then((res) => console.log(res.data[0].name));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
