import axios, { type AxiosError } from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<user[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } 
      
      catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();

    // get -> await promise -> res / err
    // .then((res) => setUsers(res.data))
    // .catch(err=> setError(err.message));
    // .then((res) => console.log(res.data[0].name));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
