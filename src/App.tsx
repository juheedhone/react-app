import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    // .then((res) => console.log(res.data[0].name));
  }, []);
  return <ul>
    {users.map(user=> <li key={user.id}>{user.name}</li>)}
  </ul>;
};

export default App;
