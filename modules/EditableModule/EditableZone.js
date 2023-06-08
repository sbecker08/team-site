import React, {useState } from 'react';

const EditableZoneContext = React.createContext(null);

function EditableZone({ isContentEditable, children }){
    
    const [isEditable, setEditable] = useState(isContentEditable);

    return (
        <EditableZoneContext.Provider value={{ isEditable, setEditable }}>
            {children}
        </EditableZoneContext.Provider>
    );
}

export { EditableZone, EditableZoneContext };