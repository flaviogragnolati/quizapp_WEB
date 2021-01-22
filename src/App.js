import './App.css';
import  SideBar  from "./components/SideBar/index.jsx";
import { useState } from 'react';

function App() {

  const [Toogle, setToogle] = useState(false)

  return (

    <div className="App">
      <SideBar open={Toogle} />
    </div>
  );
}

export default App;
