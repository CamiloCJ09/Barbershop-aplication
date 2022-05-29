import { Sidebar } from "./SideBar";
import { PageCards } from "./PageCards";
import { BottonsNav } from "./BottonsNav";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PeopleIcon from '@mui/icons-material/People';
import {useState} from 'react';
import LoginComponent from "./login";

export const Menu = ({ user }) => {
  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    
     return (
        <LoginComponent />
      );
  }
  console.log("user", user);
  const isbarber = user === "barber";
  return (
    <div className="menu">  
    <BottonsNav 
      user={user}
      handleClick={handleClick}
    />
     <PageCards/>
      <Sidebar
        width={200}
        height={900}
        children={
            <div>
                {
                    isbarber ? (
                      <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction
                          label="My clients"
                          value="clients"
                          icon={<EventAvailableIcon />}
                        />
                      </BottomNavigation>
                        
                    ) : (
                      <BottomNavigation value={value} onChange={handleChange}>
                      <BottomNavigationAction
                        label="My appointments"
                        value="appointments"
                        icon={<EventAvailableIcon />}
                      />
                    </BottomNavigation>
                    )
                }
                <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction
                          label="Barbers"
                          value="barbers"
                          icon={<PeopleIcon />}
                        />
                      </BottomNavigation>
                <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction
                          label="Album"
                          value="album"
                          icon={<PhotoAlbumIcon />}
                        />
                </BottomNavigation>
            </div>
        }
      />
      
     
    </div>
  );
};
