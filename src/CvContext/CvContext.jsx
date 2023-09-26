import { createContext, useState, useContext } from "react";

export const CvContext = createContext();

export function useCvContext() {
    return useContext(CvContext);
}

export function CvProvider({ children }) {
    const [personalData, setPersonalData] = useState({});
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);

    return (
        <CvContext.Provider value={{ personalData, setPersonalData, educationData, setEducationData, experienceData, setExperienceData }}>
            {children}
        </CvContext.Provider>
    );
}
