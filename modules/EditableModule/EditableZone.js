import React, { useState } from 'react';

const EditableZoneContext = React.createContext(null);

function EditableZone({ isContentEditable, publishKey, children, initialData }){
    
    const [isEditable, setEditable] = useState(isContentEditable);

    const [contentKeyEntries, setContentKeyEntries] = useState(initialData ?? {});

    const getEntryByKey = (key) => {
        return contentKeyEntries[key];
    }

    const updateContentEntry = (key, entry) => {
        var content = { ... contentKeyEntries }
        content[key] = entry;
        setContentKeyEntries(content);
    }

    return (
        <EditableZoneContext.Provider value={{ isEditable, setEditable, updateContentEntry, publishKey, getEntryByKey, setContentKeyEntries, contentKeyEntries }}>
            {children}
        </EditableZoneContext.Provider>
    );
}

export { EditableZone, EditableZoneContext };