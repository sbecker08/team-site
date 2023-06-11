import Image from 'next/image'
import React, { useState, useContext } from "react"
import styles from "./EditableImage.module.css"
import { EditableZoneContext } from '../EditableZone';

function EditableImage({ isContentEditable, src, width, height, uploadImageLocation }){

    const editableZoneContext = useContext(EditableZoneContext);

    var [imageSrc, setImageSrc] = useState(src);

    const preview = (e) => {
        setImageSrc(window.URL.createObjectURL(e.target.files[0]));
    }

    const uploadTextLocationStyle = uploadImageLocation == 'top' ?
        styles.top
        :
        uploadImageLocation == 'bottom' ?
        styles.bottom
        :
        styles.middle

    console.log(uploadTextLocationStyle);

    return (
        editableZoneContext.isEditable ?
        <>
            <Image alt="Team Picture" className={styles.aboutUsImage} src={imageSrc} width={width} height={height}></Image>            
            <div className={styles.imageOverlay}>
                <div className={`${styles.imageOverlayText} ${uploadTextLocationStyle}`}>Upload New Image</div>
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