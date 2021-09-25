
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./componants/MenuBar/MenuBar";
import Home from "./componants/Home/Home";



function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Home></Home>
    </div>
  );
}

export default App;