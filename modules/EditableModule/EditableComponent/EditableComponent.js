import React, { useContext } from 'react';
import { EditableZoneContext } from '../EditableZone';

function EditableComponent({ children }) {

    const editableZoneContext = useContext(EditableZoneContext);

    var data = children.props.data ?? {
        headline: 'My headline',
        subtitle: 'My subtitle'        
    }

    return (      
        <>  
        { React.cloneElement(children, { ... children.props, data}) }
        </>
    )
}

export default EditableComponent;
  