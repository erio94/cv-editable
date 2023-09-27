import { useState } from 'react'
import { useEffect } from 'react';
import { useCvContext } from '../CvContext/CvContext';
import '../style.css'
import {
    Input,
    FormLabel,
    FormControl,
} from '@chakra-ui/react'

function FormPersonal() {

    const { setPersonalData } = useCvContext(); // Accede a setPersonalData desde el contexto

    const [listPers, setListPers] = useState({ nombre: 'Edu del Río', email: 'example@mail.com', phone: '+34 000 00 00 00', adress: 'España' });

    const reacogerPersonal = (e) => {
        const { name, value } = e.target;
        setListPers(newState => ({ ...newState, [name]: value }))
    }

    // Cada vez que listEdu cambie, actualizar en el contexto.
    useEffect(() => {
        setPersonalData(listPers);
    }, [listPers]);



    return (
        <>
            <FormControl pb={4} >
                <FormLabel>Nombre completo: </FormLabel>
                <Input name="nombre" value={listPers.nombre || ''} onChange={(e) => reacogerPersonal(e)} variant='filled' placeholder='Nombre completo' />
            </FormControl >
            <FormControl pb={4} >
                <FormLabel>Email :</FormLabel>
                <Input name="email" value={listPers.email || ''} onChange={(e) => reacogerPersonal(e)} variant='filled' placeholder='Email' />
            </FormControl>
            <FormControl pb={4} >
                <FormLabel>Teléfono : </FormLabel>
                <Input name="phone" value={listPers.phone || ''} onChange={(e) => reacogerPersonal(e)} variant='filled' placeholder='Telefono' />
            </FormControl>
            <FormControl pb={4} >
                <FormLabel>Dirección : </FormLabel>
                <Input name="adress" value={listPers.adress || ''} onChange={(e) => reacogerPersonal(e)} variant='filled' placeholder='Dirección' />
            </FormControl>
        </>)
}

export default FormPersonal;