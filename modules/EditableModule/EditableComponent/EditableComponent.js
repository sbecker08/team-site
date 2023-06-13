import React, { useContext } from 'react';
import { EditableZoneContext } from '../EditableZone';

function EditableComponent({ children }) {

    const pageKey = '7hy38EXg1i0GeLhelY0IHT'

    const editableZoneContext = useContext(EditableZoneContext);

    var data = editableZoneContext.getEntryByKey(pageKey) ?? {};

    return (      
        <>  
        { React.cloneElement(children, { ... children.props, data}) }
        </>
    )
}

export default EditableComponent;
  