import React, {useState } from 'react';

const EditableZoneContext = React.createContext(null);

function EditableZone({ isContentEditable, publishKey, children, initialData }){
    
    const [isEditable, setEditable] = useState(isContentEditable);

    const contentKeyEntries = initialData ?? {};

    const updateContentEntry = (key, entry) => {
        contentKeyEntries[key] = entry;
    }

    return (
        <EditableZoneContext.Provider value={{ isEditable, setEditable, updateContentEntry, publishKey }}>
            {children}
        </EditableZoneContext.Provider>
    );
}

export { EditableZone, EditableZoneContext };