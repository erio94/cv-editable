import SvgVisble from './SvgVisible';
import { useEffect } from 'react';
import { useState } from 'react'
import { useCvContext } from '../CvContext/CvContext';
import { Fragment } from 'react';
import '../style.css'
import {
    Button,
    Input,
    Box,
    FormLabel,
    FormControl,
    WrapItem
} from '@chakra-ui/react'


function FormEducation() {
    const [abierto, setAbierto] = useState(null);
    const [isFormEdu, setFormEdu] = useState(false);
    const [visibleAddEdu, setVisibleAddEdu] = useState(false);
    const [formData, setFormData] = useState({ escuela: '', fecha_fin: '', estudios: '', fecha_inicio: '', localizacion: '' });
    const [listEdu, setListEdu] = useState([
        {
            escuela: 'Grado Superior',
            fecha_fin: '2024',
            estudios: 'Técnico Superior Desarrollo de Aplicaciones Web ',
            fecha_inicio: '2020',
            localizacion: 'España',
        }
    ]);

    const { setEducationData } = useCvContext();

    // Cada vez que listEdu cambie, actualizar en el contexto.
    useEffect(() => {
        setEducationData(listEdu);
    }, [listEdu]);

    // Obtengo datos del nuevo item creado en primera estancia que son los cambios
    const manejarCambio = (index, e) => {
        const { name, value } = e.target;
        const updatedList = [...listEdu];
        updatedList[index][name] = value;
        setListEdu(updatedList);
    }
    // Obtengo datos del nuevo item creado que son los nuevos a añadir
    const manejarDatos = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    // Importante guardar ya que añade los cambios a la lista ListEdu
    const agregarEducacion = () => {
        // Comprobar si todos los campos en formData están vacíos
        const isEmpty = Object.values(formData).every(x => (x === null || x === ''));

        if (!isEmpty) {
            setListEdu(prevState => [...prevState, formData]);
            setFormData({ escuela: '', fecha_fin: '', estudios: '', fecha_inicio: '', localizacion: '' }); // reset formData
        }
        muestraFormEduc(); // Cerrar el formulario, incluso si no se agregó nada
    }
    // Visualizar componentes
    const cierraComponentesEdu = (index) => {
        setAbierto(index);
    }
    // Visualizar componentes
    const muestraFormEduc = () => {
        setFormEdu(!isFormEdu);
        setVisibleAddEdu(!visibleAddEdu)
    }

    const eliminarEducacion = (index) => {
        const updatedList = [...listEdu];
        updatedList.splice(index, 1);
        setListEdu(updatedList);
        setAbierto(null);
    }


    return (
        <Fragment>
            {listEdu.length > 0 ? (
                listEdu.map((lista, index) => (
                    <Fragment key={index}>
                        {(!isFormEdu) && (abierto === null || abierto === index) && (
                            <Box mb={4} variant='filled' onClick={() => abierto === index ? setAbierto(null) : cierraComponentesEdu(index)} className='ed-container-card'>
                                <section className='ed-section-card'>
                                    <h2>{lista.escuela}</h2>
                                </section>
                                <div className='ed-icon-container'>
                                    <span className='icon-class'><SvgVisble /></span>
                                </div>
                            </Box>
                        )}

                        {abierto === index && <Box pt={4}>
                            <FormControl pb={4}>
                                <FormLabel>Escuela : </FormLabel>
                                <Input name="escuela" value={lista.escuela} onChange={(e) => manejarCambio(index, e)} variant='filled' placeholder='Escuela' />
                            </FormControl>
                            <FormControl pb={4} >
                                <FormLabel>Estudios :</FormLabel>
                                <Input name="estudios" value={lista.estudios} onChange={(e) => manejarCambio(index, e)} variant='filled' placeholder='Estudios' />
                            </FormControl>
                            <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                                <FormLabel>Fecha de Inicio : </FormLabel>
                                <Input name="fecha_inicio" value={lista.fecha_inicio} onChange={(e) => manejarCambio(index, e)} variant='filled' placeholder='Inicio' />
                            </FormControl>
                            <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                                <FormLabel textAlign="left">Fecha de Finalización : </FormLabel>
                                <Input name="fecha_fin" value={lista.fecha_fin} onChange={(e) => manejarCambio(index, e)} variant='filled' placeholder='Final' />
                            </FormControl>
                            <FormControl pb={4} >
                                <FormLabel>Localización : </FormLabel>
                                <Input name="localizacion" value={lista.localizacion} onChange={(e) => manejarCambio(index, e)} variant='filled' placeholder='Localización' />
                            </FormControl>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <WrapItem>
                                    <Button onClick={() => eliminarEducacion(index)} colorScheme='red'>Eliminar</Button> {/* Nuevo botón */}
                                </WrapItem>
                                <WrapItem>
                                    <Button onClick={() => abierto === index ? setAbierto(null) : cierraComponentesEdu(index)} colorScheme='gray'>Cancelar</Button>
                                </WrapItem>
                                <WrapItem>
                                    <Button onClick={() => abierto === index ? setAbierto(null) : setAbierto(index)} colorScheme='green'>Guardar</Button>
                                </WrapItem>
                            </Box>
                        </Box>}

                        {abierto !== index && abierto === null && !visibleAddEdu && index === listEdu.length - 1 && <WrapItem pt={4} display="flex" alignItems="center" justifyContent="center">
                            <Button onClick={muestraFormEduc} colorScheme='blue'>+ Educación</Button>
                        </WrapItem>}
                    </Fragment>
                ))
            ) : (
                <WrapItem pt={4} display="flex" alignItems="center" justifyContent="center">
                    <Button onClick={muestraFormEduc} colorScheme='blue'>+ Educación</Button>
                </WrapItem>
            )}


            {isFormEdu && <Box>
                <FormControl pb={4}>
                    <FormLabel>Escuela : </FormLabel>
                    <Input name="escuela" value={formData.escuela} onChange={(e) => manejarDatos(e)} variant='filled' placeholder='Escuela' />
                </FormControl>
                <FormControl pb={4} >
                    <FormLabel>Estudios :</FormLabel>
                    <Input name="estudios" value={formData.estudios} onChange={(e) => manejarDatos(e)} variant='filled' placeholder='Estudios' />
                </FormControl>
                <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                    <FormLabel>Fecha de Inicio : </FormLabel>
                    <Input name="fecha_inicio" value={formData.fecha_inicio} onChange={(e) => manejarDatos(e)} variant='filled' placeholder='Inicio' />
                </FormControl>
                <FormControl pb={4} display="grid" gridAutoFlow="row dense" >
                    <FormLabel textAlign="left">Fecha de Finalización : </FormLabel>
                    <Input name="fecha_fin" value={formData.fecha_fin} onChange={(e) => manejarDatos(e)} variant='filled' placeholder='Final' />
                </FormControl>
                <FormControl pb={4} >
                    <FormLabel>Localización : </FormLabel>
                    <Input name="localizacion" value={formData.localizacion} onChange={(e) => manejarDatos(e)} variant='filled' placeholder='Localización' />
                </FormControl>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <WrapItem>
                        <Button onClick={muestraFormEduc} colorScheme='gray'>Cancelar</Button>
                    </WrapItem>
                    <WrapItem>
                        <Button onClick={agregarEducacion} colorScheme='green'>Guardar</Button>
                    </WrapItem>
                </Box>
            </Box>

            }
        </Fragment>

    );
}


export default FormEducation;