import Image from 'next/image'
import React, { useEffect, useState } from "react"
import styles from "./EditableImage.module.css"

function EditableImage({ src, width, height }){

    var [isContentEditable, setContentEditable] = useState(false);
    var [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const editMode = queryParameters.get("editMode");

        if(editMode === "true")
            setContentEditable(true);
    });

    const preview = (e) => {
        console.log(e);
        setImageSrc(window.URL.createObjectURL(e.target.files[0]));
    }

    return (
        isContentEditable ?
        <>
            <Image alt="Team Picture" className={styles.aboutUsImage} src={imageSrc} width={width} height={height}></Image>            
            <div className={styles.imageOverlay}>
                <div className={styles.imageOverlayText}>Upload New Image</div>
            </div>
            <input type="file" className={styles.inputBox} onChange={preview} />
        </>
        :        
        <>
            <Image alt="Team Picture" className={styles.aboutUsImage} src={src} width={width} height={height}></Image>
        </>
    )
}

export default EditableImage;