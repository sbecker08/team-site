import { useContext } from 'react';
import { EditableZoneContext } from '../EditableZone';
import { isEditable } from '@testing-library/user-event/dist/utils';
import styles from './EditableText.module.css'

function  EditableText({ onTextChange, text, contentName }){
    
    const pageKey = '7hy38EXg1i0GeLhelY0IHT'

    const editableZoneContext = useContext(EditableZoneContext);

    const handleBlur = (e) => {
        console.log(e);
        var data = editableZoneContext.getEntryByKey(pageKey);
        console.log(data);
        data.fields.headline = e.target.textContent;
        console.log(data);
        editableZoneContext.updateContentEntry(pageKey, data)
        console.log(data);
        onTextChange ? onTextChange(contentName, e.target.textContent) : true;
    };

    console.log('render')

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
  