import { useContext } from 'react';
import { EditableZoneContext } from '../EditableZone';

function  EditableText({ onTextChange, text, contentName }){
    
    const editableZoneContext = useContext(EditableZoneContext);

    const handleBlur = (e) => {
        onTextChange ? onTextChange(contentName, e.target.textContent) : true;
    };

    return (
        <span contentEditable={editableZoneContext?.isEditable} suppressContentEditableWarning={true} onBlur={handleBlur} >{text}</span>
    )
}

export default EditableText;
  