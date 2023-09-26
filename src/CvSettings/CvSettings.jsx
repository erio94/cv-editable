import { createContext, useContext, useState } from 'react';

export const CvSettingsContext = createContext();

export const useCvSettings = () => {
    return useContext(CvSettingsContext);
};

export const CvSettingsProvider = ({ children }) => {
    const [fontFamily, setFontFamily] = useState("'Times New Roman', serif");
    const [fontColor, setFontColor] = useState('#000000');
    const [headerBgColor, setHeaderBgColor] = useState('#000000');
    const [headerPosition, setHeaderPosition] = useState('top');
    const [colorBody, setColorBody] = useState('#fff');
    const [fontColorHead, setFontColorHead] = useState('#fff');

    return (
        <CvSettingsContext.Provider value={{
            fontFamily, setFontFamily, fontColor, setFontColor,
            headerBgColor, setHeaderBgColor, headerPosition, setHeaderPosition, colorBody, setColorBody, fontColorHead, setFontColorHead
        }}>
            {children}
        </CvSettingsContext.Provider>
    );
};
