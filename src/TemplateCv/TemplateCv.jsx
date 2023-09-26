import '../style.css'
import { useCvSettings } from '../CvSettings/CvSettings.jsx';
import { useCvContext } from '../CvContext/CvContext.jsx';
import {
    Button
} from '@chakra-ui/react'
import ReactToPrint from 'react-to-print';

function TemplateCv() {
    const { fontFamily, fontColor, headerBgColor, headerPosition, colorBody, fontColorHead } = useCvSettings();

    let headerStyle = {
        backgroundColor: headerBgColor,
    };

    if (headerPosition === 'left' || headerPosition === 'right') {
        headerStyle.flexDirection = 'column';
    }

    const { personalData, educationData, experienceData } = useCvContext();

    return (
        <>

            <div className={`cv-container ${headerPosition}`} style={{ fontFamily: fontFamily, color: fontColor }}>
                <div className="cv-header" style={{ backgroundColor: headerBgColor, color: fontColorHead }}>
                    <h1 className="cv-name">{personalData.nombre || ''}</h1>
                    <div className="cv-contact">
                        {personalData.email && <p className="cv-email">Contacto: {personalData.email}</p>}
                        {personalData.phone && <p className="cv-phone">Teléfono: {personalData.phone}</p>}
                        {personalData.adress && <p className="cv-address">Dirección: {personalData.adress}</p>}
                    </div>
                </div>

                <div className="cv-body" style={{ backgroundColor: colorBody }}>

                    <section className="cv-experience">
                        {experienceData.length > 0 && <h2 className="cv-section-title">Experiencia Laboral</h2>}
                        {experienceData.map((job, index) => (
                            <div className="cv-job" key={index}>
                                {job.empresa && <h3 className="cv-company">Empresa: {job.empresa}</h3>}
                                <div className="cv-job-details">
                                    {job.fecha_inicio && <p className="cv-start-date">Fecha de inicio: {job.fecha_inicio}</p>}
                                    {job.fecha_fin && <p className="cv-end-date">Fecha de finalización: {job.fecha_fin}</p>}
                                    {job.cargo && <p className="cv-position">Cargo: {job.cargo}</p>}
                                    {job.lugar && <p className="cv-location">Lugar: {job.lugar}</p>}
                                    {job.descrip && <p className="cv-description">Descripción: {job.descrip}</p>}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="cv-education">
                        {educationData.length > 0 && <h2 className="cv-section-title">Educación</h2>}
                        {educationData.map((course, index) => (
                            <div className="cv-course" key={index}>
                                {course.estudios && <h3 className="cv-degree">{course.estudios}</h3>}
                                <div className="cv-course-details">
                                    {course.fecha_inicio && <p className="cv-start-date">Fecha de inicio: {course.fecha_inicio}</p>}
                                    {course.fecha_fin && <p className="cv-end-date">Fecha de finalización: {course.fecha_fin}</p>}
                                    {course.escuela && <p className="cv-institution">Organización: {course.escuela}</p>}
                                    {course.localizacion && <p className="cv-location">Localización: {course.localizacion}</p>}
                                </div>
                            </div>
                        ))}
                    </section>

                </div>
            </div>
            <ReactToPrint
                trigger={() => <Button ml={'35px'} colorScheme='green'>Descargar CV</Button>}
                content={() => document.querySelector('.cv-container')} />
        </>
    );
}

export default TemplateCv;