import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
//import firebase from './firebase';
import { Alert } from "@mui/material";


const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("barber");
  const [checkefirebasearber, setCheckefirebasearber] = useState(false);
  const [checkedClient, setCheckedClient] = useState(false); 
 // const firebase = firebase.firestore();
 const API = process.env.REACT_APP_API;
const handleSubmit = (event,mode) => {
    event.preventDefault();
    console.log("este es el mode ",mode);
    const newUser = {
      name: event.target.name.value,
      password: event.target.password.value,
      type: checkefirebasearber ? "barber" : "client",
    }
    switch(mode){
      case "login":
        //setUser("barber");
        const check = async () => {
          const response = await fetch(`${API}/users/login`, {
                method: "GET" , 
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
              });
              const data = await response.json();
              return data.status;
            }
              
            if(check()==="success"){
              setLogged(true);
              setUser(newUser.type);
            }else{
              Alert({
                title: "Error",
                description: "User or password incorrect",
                severity: "error",
              });


            }
              
        break;
      case "singup":
            const singup = async () => {
              const response = await fetch(`${API}/users/signup`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                  });
                  const data = await response.json();
                  return data.status;
                }

                if(singup()==="success"){
                  setLogged(true);
                  setUser(newUser.type);
                }else{
                  Alert({
                    title: "Error",
                    description: "Something went wrong",
                    severity: "error",
                  });
                }
        break;
      default:
        break;
    }

  };


  return (
    <div className="App" id = "app">
      {!logged ? (
        <div className={`app app--is-${mode}`}>
          <LoginComponent
            mode={mode}
            onSubmit={handleSubmit}
            user = {user}
          />
           <div className="form-block__toggle-block">
             <h3>Are you a Barber or a Client?</h3>
             <Checkbox 
             icon={<ContentCutIcon/>} 
             checkedIcon={<CheckCircleOutlineIcon/>}
              checked={checkefirebasearber}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckefirebasearber(!checkefirebasearber);
                setUser("barber");}
              
              }
              inputProps={{ 'aria-label': 'controlled' }}
             
             />
             <label>Barber</label>
             <br/>
             <Checkbox 
             icon={<AccessibilityNewIcon/>} 
             checkedIcon={<CheckCircleOutlineIcon/>} 
             checked={checkedClient}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckedClient(!checkedClient);
                setUser("client");}
              
              }
             />
             <label>Client</label>                 
          </div>
        </div>
      ) : (
        <Menu user={user} />
      )}
    </div>
  );
}

export default App;
