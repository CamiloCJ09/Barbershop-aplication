
import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import {UserData} from "./UserData";
import {useState} from 'react';
import { useEffect } from "react";
//import firebase from '../firebase';
export const ClientsCards = ({ user, handleClick }) => {
  const [clicked, setClicked] = useState(false);
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState(0);
  const API = process.env.REACT_APP_API;
  useEffect(() => {
    const getClients = async () => {
    //  const firebase = firebase.firestore();
      fetch(`${API}/clients`,
      {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    }).then((response) => response.json())
        .then((data) => {
          setClients(data);
        }
        );
    };
    getClients();
  }, []);

    return (
      <div>
      {
        !clicked ? (
          <Stack direction="row" spacing={2} className= "card">
            {
              clients.map(client => (
                <Card className="card" key={client.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => {
                            console.log("clicked");
                            setClicked(true);
                            setClientId(client.id)
                     }}>
                    <CardMedia
                      className="cardMedia"
                      image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {client.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {client.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            }
           </Stack>) : (
          <div id="album">
            <h1>Album</h1>
            <UserData
            userId={clientId}
            />
          </div>
        )
      }
    </div>
    );
}