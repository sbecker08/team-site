import Image from 'next/image'
import React, { useEffect, useState } from "react"
import styles from "./EditableImage.module.css"

function EditableImage({ src, width, height }){

    var [isContentEditable, setContentEditable] = useState(false);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const editMode = queryParameters.get("editMode");

        if(editMode === "true")
            setContentEditable(true);
    });

    return (
        isContentEditable ?
        <>
            <Image alt="Team Picture" className={styles.aboutUsImage} src={src} width={width} height={height}></Image>            
            <div className={styles.imageOverlay}>
                <div className={styles.imageOverlayText}>Upload New Image</div>
            </div>
        </>
        :        
        <>
            <Image alt="Team Picture" className={styles.aboutUsImage} src={src} width={width} height={height}></Image>
        </>
    )
}

export default EditableImage;