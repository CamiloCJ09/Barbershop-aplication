import {useState} from 'react';
import { useEffect } from "react";
//import firebase from '../firebase';
export const BarberData = ({barberId}) => {
    const [barber, setBarber] = useState({});
    const API = process.env.REACT_APP_API;
    useEffect(() => {
        const getBarber = async () => {
         //corregir  con la ruta de la api
         fetch(`${API}/barbers/${barberId}`,
         {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
    
        }) .then((response) => response.json())
                .then((data) => {
                    setBarber(data);
                    }
                );            
        };
        getBarber();
    }, []);

    return (
        <div>
            {
                barber ? (
                    <div>
                        <h1>{barber.name}</h1>
                        <p>{barber.description}</p>
                    </div>
                ) : (
                    <div>
                        <h1>No hay barbero</h1>
                    </div>
                )

            }
        </div>
    );
}