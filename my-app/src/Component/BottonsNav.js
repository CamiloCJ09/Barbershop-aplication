import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LogoutIcon from "@mui/icons-material/Logout";
import "./styles/NavBar.css";

export function BottonsNav({ user, handleClick }) {
  const [value, setValue] = React.useState("recents");
//  const [clicked, setClicked] = React.useState(false);
  const isbarber = user === "barber";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      {isbarber ? (
        <BottomNavigationAction
          label="Add a new client"
          value="New client"
          icon={<FavoriteIcon />}
        />
      ) : (
        <BottomNavigationAction
          label="New Appointment"
          value="New Appointment"
          icon={<FavoriteIcon />}
        />
      )}
      <BottomNavigationAction
        label="New barber info"
        value="Add barber info"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Edit info"
        value="Edit info"
        icon={<BorderColorIcon />}
      />
      <BottomNavigationAction
        label="Logout"
        value="Logout"
        icon={<LogoutIcon />}
        onClick={() => {
          console.log("clicked");
          localStorage.clear();
          window.location.href = "/";
        }}
      />
    </BottomNavigation>
  );
}
