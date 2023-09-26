import FormExperience from './FormExperience'
import FormEducation from './FormEducation'
import FormPersonal from './FormPersonal'
import Edicion from './Edicion.jsx'
import '../style.css'
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
} from '@chakra-ui/react'


function ConfigCV() {

    return (
        <>
            <Tabs isManual variant='enclosed'>
                <TabList>
                    <Tab fontSize={18}>Contenido</Tab>
                    <Tab fontSize={18}>Edición</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <Tabs>
                            <TabList>
                                <Tab>Datos Personales</Tab>
                                <Tab>Educación</Tab>
                                <Tab>Experiencia</Tab>
                            </TabList>
                            <TabPanels>
                                {/*PERSONAL*/}
                                <TabPanel>
                                    <FormPersonal />
                                </TabPanel>

                                {/*EDUCACIÓN*/}
                                <TabPanel>
                                    <FormEducation />
                                </TabPanel>

                                {/*EXPERIENCIA*/}
                                <TabPanel>
                                    <FormExperience />
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                    </TabPanel>

                    <TabPanel>
                        <Edicion />
                    </TabPanel>

                </TabPanels>
            </Tabs>

        </>
    )
}

export default ConfigCV;