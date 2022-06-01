import {useState} from 'react';
import { useEffect } from "react";
//import firebase from '../firebase';
export const UserData = ({userId}) => {
    const API = process.env.REACT_APP_API;
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
           // const firebase = firebase.firestore();
            fetch(`${API}/users/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then((response) => response.json())
                .then((data) => {
                    setUser(data);
                }
            );
            
        };
        getUser();
    }, []);

    return (
        <div>
            {
                user ? (
                    <div>
                        <h1>{user.name}</h1>
                        <p>{user.description}</p>
                    </div>
                ) : (
                    <div>
                        <h1>No hay usuario</h1>
                    </div>
                )

            }
        </div>
    );
}
