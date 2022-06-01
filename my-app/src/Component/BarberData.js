import {useState} from 'react';
import { useEffect } from "react";
import {app} from '../firebase';
export const BarberData = ({barberId}) => {
    const [barber, setBarber] = useState({});
    useEffect(() => {
        const getBarber = async () => {
            const db = app.firestore();
            try {
                const data = await db.collection("barbers").doc(barberId).get();
                const barber = data.data();
                if (barber) {
                    setBarber(barber);
                } else {
                    console.log("No hay barberos");
                    console.log(barber);
                }
            } catch (error) {
                console.log(error);
            }
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