import React, { useEffect, useState } from 'react'
import { Headers } from '../components/Headers'
import axios from 'axios'
import { ListRegistros } from '../components/ListRegistros';
import Constantes from '../utils/Contants'

export const Home = () => {
    const [contacts, setContacts] = useState([]);

    const getContacts = () => {
        axios.get(Constantes.URL)
            .then((resp) => {
                setContacts(resp.data)
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <>
            < Headers />
            <ListRegistros contacs={contacts} />
        </>
    )
}
