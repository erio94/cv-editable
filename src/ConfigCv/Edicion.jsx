import { useCvSettings } from '../CvSettings/CvSettings.jsx';

function Edicion() {
    const { setFontFamily, setFontColor } = useCvSettings();

    const { setHeaderBgColor, setHeaderPosition } = useCvSettings();

    const { setColorBody } = useCvSettings();

    const { setFontColorHead } = useCvSettings();

    const handleBgColorChange = (e) => {
        setHeaderBgColor(e.target.value);
    };

    const handleHeaderPositionChange = (position) => {
        setHeaderPosition(position);
    };

    const handleFontChange = (e) => {
        setFontFamily(e.target.value);
    };

    const handleColorChange = (e) => {
        setFontColor(e.target.value);
    };

    const handleBodyColorChange = (e) => {
        setColorBody(e.target.value);
    };

    const handleFontBodyChange = (e) => {
        setFontColorHead(e.target.value);
    };

    return (
        <div className="settings-container">
            <label style={{ borderBottom: '2px solid #1b4d7c', color: '#1b4d7c' }}>
                Texto
            </label>
            <label>
                <span style={{ marginRight: '5px' }}>Fuente:</span>
                <select className="font-selector" onChange={handleFontChange}>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="Verdana, sans-serif">Verdana</option>
                    <option value="'Courier New', monospace">Courier New</option>
                    <option value="'Georgia', serif">Georgia</option>
                    <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                    <option value="'Lucida Sans Unicode', 'Lucida Grande', sans-serif">Lucida Sans Unicode</option>
                    <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
                </select>
            </label>
            <label>
                <span style={{ marginRight: '5px' }}>Color de Fuente:</span>
                <input className="color-picker" type="color" onChange={handleColorChange} />
            </label>
            <label style={{ borderBottom: '2px solid #1b4d7c', color: '#1b4d7c' }}>
                Cabecera
                <hr />
            </label>
            <label>
                <span style={{ marginRight: '5px' }}>Color de Fondo:</span>
                <input className="color-picker" type="color" onChange={handleBgColorChange} />
            </label>
            <label>
                <span style={{ marginRight: '5px' }}>Color de Fuente:</span>
                <input className="color-picker" type="color" onChange={handleFontBodyChange} />
            </label>
            <div className="position-buttons">
                <span style={{ marginRight: '5px' }}>Orientación : </span>
                <button onClick={() => handleHeaderPositionChange('top')}>Arriba</button>
                <button onClick={() => handleHeaderPositionChange('left')}>Izquierda</button>
                <button onClick={() => handleHeaderPositionChange('right')}>Derecha</button>
            </div>
            <label style={{ borderBottom: '2px solid #1b4d7c', color: '#1b4d7c' }}>
                Cuerpo
                <hr />
            </label>
            <label>
                <span style={{ marginRight: '5px' }}>Color de Fondo:</span>
                <input className="color-picker" type="color" onChange={handleBodyColorChange} />
            </label>
        </div>

    );
}

export default Edicion;
