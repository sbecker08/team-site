import EditableText from "../../modules/EditableModule/EditableText/EditableText";
import EditableImage from "../../modules/EditableModule/EditableImage/EditableImage";
import styles from './HeroBannder.module.css';

function HeroBanner({ headline, buttonText, isContentEditable = true }){
    return (        
        <div className={styles.heroContainer}>
            <div>                
                <EditableImage isContentEditable={isContentEditable} src="/hero.webp" width="1184" height="880" uploadImageLocation={'top'}></EditableImage>
            </div>
            <div className="content-container">
                <h1 className={styles.bannerText}>
                    <EditableText isContentEditable={isContentEditable} text={headline}></EditableText>
                </h1>
                <button className="orange-button">{buttonText}</button>
            </div>
        </div>
    )
}

export default HeroBanner;
  