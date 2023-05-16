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
        console.log("blur");
    };

    return (
        <span contentEditable={isContentEditable} suppressContentEditableWarning={true} onBlur={onTextChange} >{text}</span>
    )
}

export default EditableText;
  