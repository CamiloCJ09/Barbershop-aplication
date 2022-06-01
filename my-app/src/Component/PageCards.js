import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./styles/cards.css";
//import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {useState} from 'react';
import {BarberData} from "./BarberData";
import { useEffect } from "react";
//import firebase from '../firebase';
export const PageCards = () => {
  const API = process.env.REACT_APP_API;
  const [clicked, setClicked] = useState(false);
  const [barbers, setBarbers] = useState([]);
  const [barberId, setBarberId] = useState(0);
  useEffect(() => {
    const getBarbers = async () => {
     // const firebase = firebase.firestore();
      fetch(`${API}/barbers`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          },
          })
        .then((response) => response.json())
        .then((data) => {
          setBarbers(data);
        }
        );
      
    };
    getBarbers();
  }, []);

  return (
    <div>
      {
        !clicked ? (
          <Stack direction="row" spacing={2} className= "card">
            {
              barbers.map(barber => (
                <Card className="card" key={barber.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea onClick={() => {
                            console.log("clicked"); 
                            setClicked(true);
                            setBarberId(barber.id) 

                      }}>
                    <CardMedia
                      className="cardMedia"
                      image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {barber.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {barber.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            }
        </Stack>) : (
          <div id = "album">
            <h1>Album</h1>
            <BarberData 
              barberId = {barberId}
            />
          </div>
        )
      }
    </div>
  );
};
