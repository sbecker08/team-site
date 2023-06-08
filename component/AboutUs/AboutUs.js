import EditableText from "../../modules/EditableModule/EditableText/EditableText";
import EditableImage from "../../modules/EditableModule/EditableImage/EditableImage";
import styles from './AboutUs.module.css';

function AboutUs({ isOddStyle, contentChanged, contentId, title, aboutUs, isContentEditable = true }){

    const handleTextChange = (contentName, text) => {
        if(contentName == "title")
            title = text;

        if(contentName == "aboutUs")
            aboutUs = text;

        console.log(title);
        console.log(text);

        if(contentChanged)
            contentChanged(contentId, {
                title: title,
                aboutUs: aboutUs
            });
    }

    return (        
        <div className={`${styles.aboutUsBackground}  ${isOddStyle ?  styles.odd : styles.even}`}>
            <div className="content-container">
                <div className={styles.aboutUsGrid}>
                    <div className={styles.aboutUsText}>
                        <h2 className={styles.title}>
                            <EditableText contentName="title" isContentEditable={isContentEditable} onTextChange={handleTextChange} text={title}></EditableText>
                        </h2>                        
                        <EditableText contentName="aboutUs" isContentEditable={isContentEditable} onTextChange={handleTextChange} text={aboutUs}></EditableText>
                    </div>
                    <div className={styles.aboutUsImageContainer}>
                        <EditableImage isContentEditable={isContentEditable} src="/team.webp" width="1184" height="880"></EditableImage>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
  