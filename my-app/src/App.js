import "./App.css";
import LoginComponent  from "./Component/login";
import {Menu} from "./Component/Menu";
import { useState } from "react";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {app} from '../firebase';
import { Alert } from "@mui/material";


const mode = "login";
function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("barber");
  const [checkedBarber, setCheckedBarber] = useState(false);
  const [checkedClient, setCheckedClient] = useState(false); 
  const db = app.firestore();

  const handleSubmit = (e,mode) => {
    e.preventDefault();
    console.log("este es el mode ",mode);
    
    switch(mode){
      case "login":
        //setUser("barber");
       
        if(checkedBarber){
         const barber = await db.collection("barbers").doc(e.target.name.value).get().then(function(doc) {
            if (doc.exists) {
              setUser("barber");
            } else {
              console.log("No such document!");
            }
          }).catch(function(error) {
                   console.log("Error getting document:", error);
          });

          if(barber){
            setUser("barber");
            setLogged(true);
          }else{
            Alert({
              title: "Error",
              message: "Check the infotmatio or create an account first",
              severity: "error"
              });
          }
         
        }else{
        const client = await db.collection("clients").doc(e.target.name.value).get().then(function(doc) {
            if (doc.exists) {
              setUser("client");
            } else {
              console.log("No such document!");
            }
          }).catch(function(error) {
                   console.log("Error getting document:", error);
          });

          if(client){
            setUser("client");
            setLogged(true);
          }else{
            Alert({
              title: "Error",
              message: "Check the information or create an account first", 
              severity: "error"
              });
          }

        
        }
              
        break;
      case "singup":
        const newUser = {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          type: checkedBarber ? "barber" : "client",
        }
        try {
          const data = await db.collection("users").add(newUser);
          if(data){
            setUser(newUser.type);
            setLogged(true);
          }
        } catch (error) {
          console.log(error);
        }

        break;
      default:
        break;
    }

  };

 

  const handleChange = (e) => {
    switch(e.target.name){
      case "name":
        data.name = e.target.value;
        break;
      case "password":
        data.password = e.target.value;
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
              checked={checkedBarber}
              onClick={() => {
                console.log("checkedClient", !checkedClient);
                setCheckedBarber(!checkedBarber);
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
