import EditableText from "../../modules/EditableModule/EditableText/EditableText";
import styles from './HeroBannder.module.css';

function HeroBanner({ headline, buttonText, isContentEditable = true }){
    return (        
        <div className={styles.heroContainer}>
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
  