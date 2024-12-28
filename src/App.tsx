import { useState } from "react";


function App() {
//   type1
  // const [firstName, setFirstName]= useState(' ');
  // const [lastName, setLastName]= useState(' ');

  // const fullName = firstName + ' ' + lastName;

// type 2- Group Related variables inside an object  

  const [person, setPerson] = useState({
    firstName:'shrikant',
    lastName:'kalar',
    // avoid deeply nested structure
    contact:{
      address:{
        street:''
      }
    }
  });

  // const [isLoading, setLoading]= useState(false);

  
  return (
    <div>
     {person.firstName + ' ' +  person.lastName}
    </div>
  );
}

export default App;
