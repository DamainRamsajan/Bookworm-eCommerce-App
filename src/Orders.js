import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import "./Orders.css";
import { useStateValue } from './StateProvider';

function Orders() {

    const [orders, setOrders] = useState ();
    const [{basket, user}, dispatch] = useStateValue();

    useEffect(() => {
        if (user){
            db.collection("users").doc(user?.uid).collection("orders").orderBy("created", "desc").onSnapshot (snapshot => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }else{
            setOrders([])
        }
       
        
    }, [user])

    return (
        <div>
            <h1>orders page</h1>
        </div>
    )
}

export default Orders
