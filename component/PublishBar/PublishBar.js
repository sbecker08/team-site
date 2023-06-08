import React, { useEffect, useState, setState } from "react"
import styles from "./PublishBar.module.css";

function PublishBar({ onTextChange, text }){

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
            <button className="orange-button" onClick={handleClick} >Submit for Approval</button>
        </div> 
        :
        <></>
    )
}

export default PublishBar;
  