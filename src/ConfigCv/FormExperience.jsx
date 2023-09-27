import { useCvContext } from '../CvContext/CvContext';
import SvgInvisible from './SvgInvisible'
import { useEffect } from 'react';
import { useState } from 'react'
import { Fragment } from 'react';
import '../style.css'
import {
    Button,
    Input,
    Box,
    FormLabel,
    FormControl,
    Textarea,
    WrapItem
} from '@chakra-ui/react'

function FormExperience() {
    const [listExp, setListExp] = useState([{ empresa: 'Practicas de empresa', fecha_fin: 'Presente', cargo: 'Programador Full Stack', fecha_inicio: '2023', lugar: 'España', descrip: 'Contrato de practicas y trabajo eventual' }]);
    const [open, setOpen] = useState(null);
    const [visibleFormExp, setVisibleFormExp] = useState(false);
    const [visibleAddExp, setVisibleAddExp] = useState(false);
    const { setExperienceData } = useCvContext();
    const [formExp, setFormExp] = useState({
        empresa: '',
        fecha_fin: '',
        cargo: '',
        fecha_inicio: '',
        lugar: '',
        descrip: ''
    });

    // Cada vez que listEdu cambie, actualizar en el contexto.
    useEffect(() => {
        setExperienceData(listExp);
    }, [listExp]);

    // Obtengo datos del nuevo item creado en primera estancia que son los cambios
    const manejarExp = (index, e) => {
        const { name, value } = e.target;
        const updatedExp = [...listExp];
        updatedExp[index][name] = value;
        setListExp(updatedExp);
    }

    // Obtengo datos del nuevo item creado que son los nuevos a añadir
    const obtenerExp = (e) => {
        const { name, value } = e.target;
        setFormExp(newExp => ({ ...newExp, [name]: value }))
    }

    // TRABAJAMOS CON LA LISTA LISTEXP
    const guardarExp = () => {
        // Comprobar si todos los campos en formData están vacíos
        const isEmpty = Object.values(formExp).every(x => (x === null || x === ''));

        if (!isEmpty) {
            setListExp([...listExp, formExp]);
            setFormExp({ empresa: '', fecha_fin: '', cargo: '', fecha_inicio: '', lugar: '', descrip: '' });
        }
        muestraFormExp()
    }

    // Visualizar componentes
    const muestraFormExp = () => {
        setVisibleFormExp(!visibleFormExp)
        setVisibleAddExp(!visibleAddExp)
    }
    const cierraComponentesExp = (index) => {
        setOpen(index);
    }

    const eliminarExperiencia = (index) => {
        const updatedList = [...listExp];
        updatedList.splice(index, 1);
        setListExp(updatedList);
        setOpen(null);
    }



    return (

        <Fragment>
            {listExp.length > 0 ? (
                listExp.map((exp, index) => (
                    <Fragment key={index}>
                        {(!visibleFormExp) && (open === null || open === index) && (
                            <Box mb={4} variant='filled' onClick={() => open === index ? setOpen(null) : cierraComponentesExp(index)} className='ed-container-card'>
                                <section className='ed-section-card'>
                                    <h2>{exp.empresa}</h2>
                                </section>
                                <div className='ed-icon-container'>
                                    <span className='icon-class'><SvgInvisible /></span>
                                </div>
                            </Box>
                        )}

                        {open === index && (<Box pb={4}>
                            <FormControl pb={4}>
                                <FormLabel>Nombre de la empresa : </FormLabel>
                                <Input name="empresa" value={exp.empresa} onChange={(e) => manejarExp(index, e)} variant='filled' placeholder='Nombre de la empresa :' />
                            </FormControl>
                            <FormControl pb={4} >
                                <FormLabel>Cargo laboral :</FormLabel>
                                <Input name="cargo" value={exp.cargo} onChange={(e) => manejarExp(index, e)} variant='filled' placeholder='Cargo laboral ' />
                            </FormControl>

                            <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                                <FormLabel>Fecha de Inicio : </FormLabel>
                                <Input name="fecha_inicio" value={exp.fecha_inicio} onChange={(e) => manejarExp(index, e)} variant='filled' placeholder='Inicio' />
                            </FormControl>
                            <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                                <FormLabel textAlign="left">Fecha de Finalización : </FormLabel>
                                <Input name="fecha_fin" value={exp.fecha_fin} onChange={(e) => manejarExp(index, e)} variant='filled' placeholder='Final' />
                            </FormControl>
                            <FormControl pb={4} >
                                <FormLabel>Localización : </FormLabel>
                                <Input name="lugar" value={exp.lugar} onChange={(e) => manejarExp(index, e)} variant='filled' placeholder='Localización' />
                            </FormControl>
                            <FormControl pb={4} >
                                <FormLabel>Descripción: </FormLabel>
                                <Textarea name="descrip" value={exp.descrip} onChange={(e) => manejarExp(index, e)} placeholder='Una breve descripción..' />
                            </FormControl>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <WrapItem>
                                    <Button onClick={() => eliminarExperiencia(index)} colorScheme='red'>Eliminar</Button> {/* Nuevo botón */}
                                </WrapItem>
                                <WrapItem>
                                    <Button onClick={() => open === index ? setOpen(null) : cierraComponentesExp(index)} colorScheme='gray'>Cancelar</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button onClick={() => open === index ? setOpen(null) : setOpen(index)} colorScheme='green'>Guardar</Button>
                                </WrapItem>
                            </Box>
                        </Box>)}

                        {!visibleAddExp && open !== index && open === null && index === listExp.length - 1 && (<WrapItem pt={4} display="flex" alignItems="center" justifyContent="center">
                            <Button onClick={muestraFormExp} colorScheme='blue'>+ Experiencia</Button>
                        </WrapItem>)}
                    </Fragment>
                )
                )) : (
                <WrapItem pt={4} display="flex" alignItems="center" justifyContent="center">
                    <Button onClick={muestraFormExp} colorScheme='blue'>+ Experiencia</Button>
                </WrapItem>
            )}

            {
                visibleFormExp && (<Box pb={4}>
                    <FormControl pb={4}>
                        <FormLabel>Nombre de la empresa : </FormLabel>
                        <Input name="empresa" value={formExp.empresa || ''} onChange={(e) => obtenerExp(e)} variant='filled' placeholder='Nombre de la empresa :' />
                    </FormControl>
                    <FormControl pb={4} >
                        <FormLabel>Cargo laboral :</FormLabel>
                        <Input name="cargo" value={formExp.cargo || ''} onChange={(e) => obtenerExp(e)} variant='filled' placeholder='Cargo laboral ' />
                    </FormControl>
                    <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                        <FormLabel>Fecha de Inicio : </FormLabel>
                        <Input name="fecha_inicio" value={formExp.fecha_inicio || ''} onChange={(e) => obtenerExp(e)} variant='filled' placeholder='Inicio' />
                    </FormControl>
                    <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                        <FormLabel textAlign="left">Fecha de Finalización : </FormLabel>
                        <Input name="fecha_fin" value={formExp.fecha_fin || ''} onChange={(e) => obtenerExp(e)} variant='filled' placeholder='Final' />
                    </FormControl>
                    <FormControl pb={4} >
                        <FormLabel>Localización : </FormLabel>
                        <Input name="lugar" value={formExp.lugar || ''} onChange={(e) => obtenerExp(e)} variant='filled' placeholder='Localización' />
                    </FormControl>
                    <FormControl pb={4} >
                        <FormLabel>Descripción: </FormLabel>
                        <Textarea name="descrip" value={formExp.descrip || ''} onChange={(e) => obtenerExp(e)} placeholder='Una breve descripción..' />
                    </FormControl>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <WrapItem>
                            <Button onClick={muestraFormExp} colorScheme='gray'>Cancelar</Button>
                        </WrapItem>
                        <WrapItem>
                            <Button onClick={guardarExp} colorScheme='green'>Guardar</Button>
                        </WrapItem>
                    </Box>
                </Box>)
            }
        </Fragment>
    );
}



export default FormExperience;