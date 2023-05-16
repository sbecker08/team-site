import React, { useEffect, useState, setState } from "react"

function EditableText({ onTextChange, text }){

    var [isContentEditable, setContentEditable] = useState(false);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const editMode = queryParameters.get("editMode");

        if(editMode === "true")
            setContentEditable(true);
    });

    const handleBlur = (e) => {
        onTextChange ? onTextChange(e.target.textContent) : true;
    };

    return (
        <span contentEditable={isContentEditable} suppressContentEditableWarning={true} onBlur={handleBlur} >{text}</span>
    )
}

export default EditableText;
  