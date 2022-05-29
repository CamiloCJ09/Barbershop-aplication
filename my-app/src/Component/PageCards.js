import { Card } from "@mui/material";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./styles/cards.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export const PageCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={8}>
          <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://th.bing.com/th/id/OIP.qc8aczpQp6Gzi9KD5aIrlQHaE8?pid=ImgDet&rs=1"
                alt="barbero"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Barbero
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  barbers are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md={8}>
          <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random/200x200?sig=1"
                alt="barbero"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  otro Barbero
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  barbers are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
