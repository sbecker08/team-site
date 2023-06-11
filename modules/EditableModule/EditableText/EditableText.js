import { useContext } from 'react';
import { EditableZoneContext } from '../EditableZone';
import { isEditable } from '@testing-library/user-event/dist/utils';
import styles from './EditableText.module.css'

function  EditableText({ onTextChange, text, contentName }){
    
    const editableZoneContext = useContext(EditableZoneContext);

    const handleBlur = (e) => {
        onTextChange ? onTextChange(contentName, e.target.textContent) : true;
    };

    return (
        isEditable
        ?        
        <div className={styles.editableText}>
            <div className={styles.container} contentEditable={editableZoneContext?.isEditable} suppressContentEditableWarning={true} onBlur={handleBlur} >{text} </div>          
            <div className={styles.wrapper}></div>  
        </div>
        :         
        <span>{text}</span>
    )
}

export default EditableText;
  