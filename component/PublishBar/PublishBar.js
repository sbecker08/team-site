import React, { useEffect, useState, setState } from "react"
import styles from "./PublishBar.module.css";

function EditableText({ onTextChange, text }){

    var [isContentEditable, setContentEditable] = useState(false);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const editMode = queryParameters.get("editMode");

        if(editMode === "true")
            setContentEditable(true);
    });

    const handleClick = (e) => {
        console.log("click");
    };

    return (
        isContentEditable ?
        <div className={styles.publishContainer}> 
            <button class="orange-button" onClick={handleClick} >Publish</button>
        </div> 
        :
        <></>
    )
}

export default EditableText;
  