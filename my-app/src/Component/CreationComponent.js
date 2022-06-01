import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {app} from '../firebase';

export const CreationComponent = ({ user, dataClicked, }) => {
    console.log("user", user);
    console.log("dataClicked", dataClicked);
    const db = app.firestore();
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
          name: e.target.name.value,
          description: e.target.description.value,
        }
       switch (dataClicked) {
         case "New barber info":
          db.collection("barbers").add(newUser);
           break;
         case "New Client":
          db.collection("clients").add(newUser);
              break;
         case "New Appointment": 
                  const newAppointment = {
                      barber: e.target.barber.value,
                      client: e.target.client.value,
                      date: e.target.date.value,
                      status: "pending",
                  }
                  db.collection("appointments").add(newAppointment);
              break;
         default:
           break;
       }
    }

   
  return (
    <div id ="album">
      {user === "barber" ? (
        <div>
          {dataClicked === "New client" ? (
            <div>
              <h1>Add a new client</h1>
              <form onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  name="description"
                />
              </Box>
              <Button variant="contained" color="success" type="submit">
                Save
              </Button>
              
              </form>
              
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div>
          {dataClicked === "New Appointment" ? (
            <div>
              <h1> New appointments</h1>
              <form onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Barber"
                  variant="outlined"
                  name="barber"

                />
                <TextField
                  id="outlined-basic"
                  label="Client"
                  variant="outlined"
                  name="client"
                />
                <br></br>
               
              </Box>

              <div>
                <h2>type a date for the appoiment</h2>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type={'date'}
                  name="date"
                />
              </div>
              <br></br>
              <Button variant="contained" color="success" type="input">
                Save
              </Button>
              </form>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}

      {dataClicked === "New barber info" ? (
        <div>
          <h1> New Barber info</h1>
          <form onSubmit={handleSubmit}>
          <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  name="description"
                />
              </Box>
              <Button variant="contained" color="success" type = "submit">
                Save
              </Button>
          </form>

        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
