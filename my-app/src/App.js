import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";



const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
  return (
    <div className="App">
      {!logged ? (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={function () {
              console.log("submit");
              setLogged(true);
            }}
          />
        </div>
      ) : (
        <Menu user={"barber"} />
      )}
    </div>
  );
}

export default App;
