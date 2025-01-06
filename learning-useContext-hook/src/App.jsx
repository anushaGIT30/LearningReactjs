import { useState } from 'react';
import ChildA from './components/ChildA';
import { createContext } from 'react'
import './App.css'


//step 1: creating a context
const userContext = createContext();
//step 2: wrap all the child inside the provider(to become a consumer)
//step 3: pass value
//step 4: consuming the value inside the consumer


const App = () => {
  const [user, setUser] = useState({ name: "anushaaa" })
  const handleChange = () => {
    setUser({ name: "Updated Anusha" }); // Update user data
  };
  return (
    <>
      <h1>{`Hello, ${user.name}`}</h1>
      <button onClick={handleChange}>Change Name</button>
      <userContext.Provider value={user}>{/*wrapping inside a provide*/}
        <ChildA />
      </userContext.Provider>
    </>
  )
}

export default App
export { userContext }