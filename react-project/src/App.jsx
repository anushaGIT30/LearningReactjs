
import { useState } from "react";
import './App.css';
import Login from "./Components/login";
import Logout from "./Components/logout";
const App = () => {

  // eslint-disable-next-line no-unused-vars
  const [isloggedin, setlogedin] = useState(false);
  if (isloggedin) {
    return (<Logout />)
  } // this is called conditional rendering 
  else {
    return (<Login />)
  }


}

export default App
