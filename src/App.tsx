import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] =useState('')

  useEffect(() => {
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch(err=> setError(err.message));
    // .then((res) => console.log(res.data[0].name));
  }, []);
  return (
    <>
    {error &&  <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
